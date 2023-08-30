import React from 'react';
import classNames from 'classnames/bind';

import { Input } from 'components/ui/input';
import { TodoContent } from 'features/todo/todo-content';
import { TodoFooter } from 'features/todo/todo-footer';
import { markTask, removeTask } from 'features/todo/todo-slice';
import { useAppDispatch } from 'store/hooks';

import { useTodo } from './use-todo';
import styles from './todo.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Todo: FC<Props> = ({ className }: Props) => {
	const {
		allTasks,
		activeTasks,
		completedTasks,
		tasksToRender,
		taskValue,
		filter,
		inputRef,
		updateTaskValue,
		addTaskOnEnter,
		addTaskOnBlur,
	} = useTodo();

	const dispatch = useAppDispatch();

	const handleRemoveTask = (id: string): void => {
		dispatch(removeTask(id));
	};

	const handleMarkTask = (id: string): void => {
		dispatch(markTask(id));
	};
	return (
		<div className={cx('todo', className)}>
			<Input
				placeholder="Введите задачу"
				value={taskValue}
				onChange={updateTaskValue}
				onKeyDown={addTaskOnEnter}
				onBlur={addTaskOnBlur}
				className={cx('todo__input')}
				ref={inputRef}
			/>
			<TodoContent
				tasks={tasksToRender}
				filter={filter}
				counter={tasksToRender.length}
				onMark={handleMarkTask}
				onRemove={handleRemoveTask}
			/>
			<TodoFooter allTasks={allTasks} activeTasks={activeTasks} completedTasks={completedTasks} filter={filter} />
		</div>
	);
};
