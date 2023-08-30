import type { TaskType, FilterType } from 'types';

type StoreKey = 'tasks' | 'filter';

export const getFromLocalStorage = (key: StoreKey): TaskType[] | FilterType => {
	const data = localStorage.getItem(key);

	if (key === 'tasks') {
		return (data ? JSON.parse(data) : []) as TaskType[];
	}

	return (data ? JSON.parse(data) : 'All') as FilterType;
};
