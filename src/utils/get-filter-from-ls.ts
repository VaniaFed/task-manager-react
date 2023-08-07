import type { FilterType } from 'types';

export const getFilterFromLS = (): FilterType => {
	const data = localStorage.getItem('filter');
	return data ? JSON.parse(data) : 'All';
};
