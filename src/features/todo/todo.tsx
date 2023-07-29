import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import { Input } from 'components/ui/input';
import { TodoContent } from 'features/todo/todo-content';
import { TodoFooter } from 'features/todo/todo-footer';

import { addTask, selectTasks, selectFilter, selectActiveTasks, selectCompletedTasks } from './todo-slice';
import { createTask } from './helpers';
import styles from './todo.module.scss';

import type { FC, FocusEvent, KeyboardEvent } from 'react';
import type { Props } from './props';
import type { TaskType } from 'types';

const cx = classNames.bind(styles);

export const Todo: FC<Props> = ({ className }) => {
	const [text, setText] = useState('');
	const allTasks = useSelector(selectTasks);
	const activeTasks = useSelector(selectActiveTasks);
	const completedTasks = useSelector(selectCompletedTasks);

	const filter = useSelector(selectFilter);

	const tasksToRender: TaskType[] = filter === 'All' ? allTasks : filter === 'Active' ? activeTasks : completedTasks;

	const dispatch = useDispatch();

	const onAddTask = (value: string): void => {
		if (value.length > 0) {
			dispatch(addTask(createTask(value)));
			setText('');
		}
	};

	const handleChange = (e: FocusEvent<HTMLInputElement>): void => {
		setText(e.target.value);
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
		if (e.key === 'Enter') {
			onAddTask(text);
		}
	};

	const handleBlur = (): void => {
		onAddTask(text);
	};

	return (
		<div className={cx('todo', className)}>
			<Input
				placeholder="Введите задачу"
				value={text}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				onBlur={handleBlur}
				className={cx('todo__input')}
			/>
			<TodoContent tasks={tasksToRender} filter={filter} counter={tasksToRender.length} />
			<TodoFooter filter={filter} />
		</div>
	);
};
