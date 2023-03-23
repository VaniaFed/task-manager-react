import { generateId } from 'utils/utilities';

export const addTaskAction = (text: string) => ({
	type: 'ADD_TASK',
	payload: {
		id: generateId(),
		text,
		status: 'Active',
	},
});
