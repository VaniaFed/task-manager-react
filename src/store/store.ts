import { configureStore } from '@reduxjs/toolkit';

import todoReducer from 'features/todo/todo-slice';

export const store = configureStore({
	reducer: {
		todo: todoReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
