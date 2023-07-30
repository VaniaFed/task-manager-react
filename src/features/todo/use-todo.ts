import { createRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	addTask as addTaskAction,
	selectTasks,
	selectFilter,
	selectActiveTasks,
	selectCompletedTasks,
} from './todo-slice';
import { createTask } from './helpers';

import type { FocusEvent, KeyboardEvent, RefObject } from 'react';
import type { FilterType, TaskType } from 'types';

interface UseTodo {
	allTasks: TaskType[];
	activeTasks: TaskType[];
	completedTasks: TaskType[];
	tasksToRender: TaskType[];
	taskValue: string;
	inputRef: RefObject<HTMLInputElement>;
	filter: FilterType;
	updateTaskValue: (e: FocusEvent<HTMLInputElement>) => void;
	addTaskOnEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
	addTaskOnBlur: () => void;
}

export const useTodo = (): UseTodo => {
	const [taskValue, setTaskValue] = useState('');
	const allTasks = useSelector(selectTasks);
	const activeTasks = useSelector(selectActiveTasks);
	const completedTasks = useSelector(selectCompletedTasks);

	const filter = useSelector(selectFilter);

	const tasksToRender: TaskType[] = filter === 'All' ? allTasks : filter === 'Active' ? activeTasks : completedTasks;

	const dispatch = useDispatch();

	const addTask = (value: string): void => {
		if (value.length > 0) {
			dispatch(addTaskAction(createTask(value)));
			setTaskValue('');
		}
	};

	const updateTaskValue = (e: FocusEvent<HTMLInputElement>): void => {
		setTaskValue(e.target.value);
	};

	const addTaskOnEnter = (e: KeyboardEvent<HTMLInputElement>): void => {
		if (e.key === 'Enter') {
			addTask(taskValue);
		}
	};

	const addTaskOnBlur = (): void => {
		addTask(taskValue);
	};

	const inputRef = createRef<HTMLInputElement>();

	useEffect(() => {
		window.addEventListener('keydown', (e) => {
			inputRef.current?.focus();
		});
	});

	return {
		allTasks,
		activeTasks,
		completedTasks,
		tasksToRender,
		taskValue,
		inputRef,
		filter,
		updateTaskValue,
		addTaskOnEnter,
		addTaskOnBlur,
	};
};
