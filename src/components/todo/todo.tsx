import React from 'react';
import classNames from 'classnames/bind';

import styles from './todo.module.scss';
import { Input } from 'components/input';
import { TodoContent } from 'components/todo-content/todo-content';
import { Props } from './props';

export const Todo = ({ tasks, filterBy, createTask }: Props) => {
	const cx = classNames.bind(styles);
	const resultClass = cx('todo');

	return (
		<div className={resultClass}>
			<Input placeholder="Введите задачу" onEnter={createTask} onBlur={createTask}></Input>
			<TodoContent tasks={tasks} filterBy={filterBy} counter={tasks.length} />
			<span>Filter</span>
		</div>
	);
};
