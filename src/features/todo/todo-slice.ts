import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from 'store/store';
import type { FilterType, TaskType } from 'types';

export interface InitialState {
	tasks: TaskType[];
	filter: FilterType;
}

const initialState: InitialState = {
	tasks: [],
	filter: 'All',
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<TaskType>) => {
			state.tasks.unshift(action.payload);
		},
		markTask: (state, action: PayloadAction<string>) => {
			const tasksWithMarkedOne = state.tasks.map((task) =>
				task.id === action.payload
					? {
							...task,
							isCompleted: !task.isCompleted,
					  }
					: task
			);
			state.tasks = tasksWithMarkedOne;
		},
		removeTask: (state, action: PayloadAction<string>) => {
			const tasksWithRemovedOne = state.tasks.filter((task) => task.id !== action.payload);
			state.tasks = tasksWithRemovedOne;
		},
		removeCompleted: (state) => {
			state.tasks = state.tasks.filter((task) => !task.isCompleted);
		},
		changeFilter: (state, action: PayloadAction<FilterType>) => {
			state.filter = action.payload;
		},
	},
});

export const { addTask, markTask, removeTask, removeCompleted, changeFilter } = todoSlice.actions;

export const selectTasks = (state: RootState): TaskType[] => state.todo.tasks;

export const selectActiveTasks = (state: RootState): TaskType[] => state.todo.tasks.filter((task) => !task.isCompleted);

export const selectCompletedTasks = (state: RootState): TaskType[] =>
	state.todo.tasks.filter((task) => task.isCompleted);

export const selectFilter = (state: RootState): FilterType => state.todo.filter;

export default todoSlice.reducer;
