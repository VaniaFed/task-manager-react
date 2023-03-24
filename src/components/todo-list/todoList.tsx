import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import styles from './todo-list.module.scss';
import { Props } from './props';
import { TodoItem } from 'components/todo-item';
import { TaskType } from 'types/task-type';
import { actions } from 'actions/';

export const TodoList = ({ tasks = [] }: Props) => {
	const dispatch = useDispatch();
	const removeTask = (id: string) => {
		dispatch(actions.removeTaskAction(id));
	};

	const cx = classNames.bind(styles);
	const resultClass = cx('todo-list');

	return (
		<div className={resultClass}>
			{tasks.map((task, key) => (
				<TodoItem task={task} key={key} onRemove={removeTask} />
			))}
		</div>
	);
};
