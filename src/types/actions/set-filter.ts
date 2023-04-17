// @ts-ignore
import { SET_FILTER } from 'constants.ts';
import { FilterType } from 'types/';

export interface SetFilterAction {
	type: typeof SET_FILTER;
	payload: {
		filter: FilterType;
	};
}
