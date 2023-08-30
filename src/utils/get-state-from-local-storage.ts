import { getFromLocalStorage } from 'utils/get-from-local-storage';

import type { InitialState } from 'features/todo/todo-slice';
import type { FilterType, TaskType } from 'types';

export const getStateFromLocalStorage = (): InitialState => {
	return {
		tasks: getFromLocalStorage('tasks') as TaskType[],
		filter: getFromLocalStorage('filter') as FilterType,
	};
};
