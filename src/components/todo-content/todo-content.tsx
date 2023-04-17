import React from 'react';
import classNames from 'classnames/bind';

import { Heading } from 'components/heading';
import { Counter } from 'components/counter';
import { TodoContentBox } from 'components/todo-content-box';
import { TodoList } from 'components/todo-list';
import { EmptyState } from 'components/empty-state';
import { Props } from './props';
import styles from './todo-content.module.scss';

const cx = classNames.bind(styles);

export const TodoContent = ({ tasks, filter, counter }: Props) => {
	return (
		<div className={cx('todo-content')}>
			<Heading size="3" className={cx('todo-content__heading')}>
				{filter}
				<Counter value={counter} className={cx('heading__counter')} />
			</Heading>
			<TodoContentBox>{tasks.length > 0 ? <TodoList tasks={tasks} /> : <EmptyState />}</TodoContentBox>
		</div>
	);
};
