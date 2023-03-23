import { StoreType } from '../types/store-type';
import { FilterType } from 'types/filter-type';
import { TaskType } from 'types/task-type';
import { configureStore } from '@reduxjs/toolkit';

const initialState: StoreType = {
	tasks: [
		{
			id: 'sdklj',
			text: 'Task 1',
			status: 'Active',
		},
		{
			id: 'klfjlsdkfjsd',
			text: 'Task 2',
			status: 'Active',
		},
		{
			id: 'ghj',
			text: 'Task 3',
			status: 'Active',
		},
		{
			id: 'ggg',
			text: 'Task 4',
			status: 'Completed',
		},
	],
	filter: 'All',
};

const reducer: any = (state = initialState, action: any) => {
	switch (action.type) {
		case 'ADD_TASK': {
			const { id, text, status } = action.payload;
			return {
				...state,
				tasks: [
					{
						id,
						text,
						status,
					},
					...state.tasks,
				],
			};
			break;
		}
		case 'REMOVE_TASK': {
			const { id } = action.payload;
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== id),
			};
		}
		// case 'GET_TASKS':
		// 	return state.tasks;
		// 	break;

		// case 'GET_TASKS_BY_STATUS':
		// 	return state.tasks.filter((task) => task.status === action.status) || [];
		// 	break;

		default:
			return state;
			break;
	}
};

export default configureStore({
	reducer,
});
