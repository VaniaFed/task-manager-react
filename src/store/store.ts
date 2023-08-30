import { configureStore } from '@reduxjs/toolkit';

import tasksReducer from 'models/tasks/slice';
import filterReducer from 'models/filter/slice';
import { saveToLocalStorage } from 'utils/save-to-local-storage';
import { getFromLocalStorage } from 'utils/get-from-local-storage';

import type { FilterType, TaskType } from 'types';

export const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		filter: filterReducer,
	},
	preloadedState: {
		tasks: getFromLocalStorage('tasks') as TaskType[],
		filter: getFromLocalStorage('filter') as FilterType,
	},
});

store.subscribe(() => {
	saveToLocalStorage('tasks', store.getState().tasks);
	saveToLocalStorage('filter', store.getState().filter);
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
