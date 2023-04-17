// @ts-ignore
import { SET_FILTER } from 'constants.ts';
import { FilterType } from 'types/';
import { SetFilterAction } from 'types/actions/';

export const setFilter = (filter: FilterType): SetFilterAction => ({
	type: SET_FILTER,
	payload: {
		filter,
	},
});
