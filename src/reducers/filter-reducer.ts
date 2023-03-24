import { FilterType } from './../types/filter-type';
import { v4 } from 'uuid';

const initialState: FilterType = 'All';

export const filterReducer: any = (tasks = initialState, action: any) => {
	switch (action.type) {
		case 'SET_FILTER': {
			const { value } = action.payload;

			break;
		}
		default:
			return tasks;
			break;
	}
};
