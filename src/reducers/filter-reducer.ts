import { FilterType } from 'types/filter-type';
import { SetFilterAction } from 'types/actions/set-filter';
// @ts-ignore
import { SET_FILTER } from 'constants.ts';

const initialState: FilterType = 'All';

type Action = SetFilterAction;

export const filterReducer: any = (filter = initialState, action: Action) => {
	switch (action.type) {
		case SET_FILTER: {
			const { filter } = action.payload;
			return filter;
		}

		default:
			return filter;
			break;
	}
};
