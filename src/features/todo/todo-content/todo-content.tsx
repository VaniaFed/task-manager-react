import React from 'react';
import classNames from 'classnames/bind';

import { Heading } from 'components/ui/heading';
import { Counter } from 'components/ui/counter';
import { EmptyState } from 'components/ui/empty-state';

import { TodoContentBox } from '../todo-content-box';
import { TodoList } from '../todo-list';

import styles from './todo-content.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const TodoContent: FC<Props> = ({ tasks, filter, counter, onMark, onRemove }) => {
	return (
		<div className={cx('todo-content')}>
			<Heading size="3" className={cx('todo-content__heading')}>
				{filter}
				<Counter value={counter} className={cx('heading__counter')} />
			</Heading>
			<TodoContentBox>
				{tasks.length > 0 ? (
					<TodoList tasks={tasks} onMark={onMark} onRemove={onRemove} />
				) : (
					<EmptyState filter={filter} />
				)}
			</TodoContentBox>
		</div>
	);
};
