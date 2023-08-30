import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { FilterType } from 'types';

const initialState: FilterType = 'All' as FilterType;

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		changeFilter: (state, action: PayloadAction<FilterType>) => {
			return action.payload;
		},
	},
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
