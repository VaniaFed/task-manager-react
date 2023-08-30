import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

import type { TaskType } from 'types';

type InitialState = TaskType[];

const initialState: InitialState = [];

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: {
			reducer(state, action: PayloadAction<TaskType>) {
				state.unshift(action.payload);
			},
			prepare(value: string) {
				return {
					payload: {
						id: v4(),
						text: value,
						isCompleted: false,
					},
				};
			},
		},
		markTask: (state, action: PayloadAction<string>) => {
			const existingTask = state.find((task) => task.id === action.payload);
			if (existingTask) {
				existingTask.isCompleted = !existingTask.isCompleted;
			}
		},
		removeTask: (state, action: PayloadAction<string>) => {
			return state.filter((task) => task.id !== action.payload);
		},
		removeCompleted: (state) => {
			return state.filter((task) => !task.isCompleted);
		},
	},
});

export const { addTask, markTask, removeTask, removeCompleted } = tasksSlice.actions;

export default tasksSlice.reducer;
