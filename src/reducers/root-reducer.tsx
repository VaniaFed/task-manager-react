import { combineReducers } from 'redux';

export const rootReducer = (action: any, initialState: any) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...action,
				
			};
			break;

		default:
			break;
	}
};
