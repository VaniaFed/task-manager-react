import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import { TodoItem } from '../todo-item/todo-item';
import { markTask, removeTask } from '../todo-slice';

import styles from './todo-list.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

export const TodoList: FC<Props> = ({ tasks = [] }) => {
	const dispatch = useDispatch();
	const cx = classNames.bind(styles);
	const resultClass = cx('todo-list');

	return (
		<div className={resultClass}>
			{tasks.map((task) => (
				<TodoItem
					task={task}
					key={task.id}
					onRemove={(id: string) => {
						dispatch(removeTask(id));
					}}
					onClick={(id: string) => {
						dispatch(markTask(id));
					}}
				/>
			))}
		</div>
	);
};
