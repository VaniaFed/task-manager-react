import type { TaskType } from 'types';

export const getTasksFromLS = (): TaskType[] => {
	const data = localStorage.getItem('tasks');
	return data ? JSON.parse(data) : [];
};
