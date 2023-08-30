import React from 'react';
import classNames from 'classnames/bind';

import { TodoItem } from '../todo-item';

import styles from './todo-list.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const TodoList: FC<Props> = ({ tasks = [], onMark, onRemove }) => {
	return (
		<div className={cx('todo-list')}>
			{tasks.map((task) => (
				<TodoItem task={task} key={task.id} onRemove={onRemove} onMark={onMark} />
			))}
		</div>
	);
};
