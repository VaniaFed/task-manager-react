import type { RootState } from 'store/store';
import type { FilterType } from 'types';

export const selectFilter = (state: RootState): FilterType => state.filter;
