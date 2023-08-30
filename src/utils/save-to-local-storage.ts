import type { TaskType, FilterType } from 'types';

type StoreKey = 'tasks' | 'filter';
type StoreValue = TaskType[] | FilterType;

export const saveToLocalStorage = (key: StoreKey, value: StoreValue): void => {
	const data = value ? JSON.stringify(value) : '';
	localStorage.setItem(key, data);
};
