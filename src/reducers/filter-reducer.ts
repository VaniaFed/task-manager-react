import { FilterType } from './../types/filter-type';

const initialState: FilterType = 'All';

export const filterReducer: any = (filter = initialState, action: any) => {
	switch (action.type) {
		case 'SET_FILTER': {
			const { filter } = action.payload;
			return filter;
			break;
		}
		default:
			return filter;
			break;
	}
};
