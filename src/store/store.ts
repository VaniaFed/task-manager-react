import { configureStore } from '@reduxjs/toolkit';

import todoReducer from 'models/todo/slice';
import { getStateFromLocalStorage } from 'utils/get-state-from-local-storage';
import { saveToLocalStorage } from 'utils/save-to-local-storage';

export const store = configureStore({
	reducer: {
		todo: todoReducer,
	},
	preloadedState: {
		todo: getStateFromLocalStorage(),
	},
});

store.subscribe(() => {
	saveToLocalStorage('tasks', store.getState().todo.tasks);
	saveToLocalStorage('filter', store.getState().todo.filter);
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
