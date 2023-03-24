import { TaskType } from './../types/task-type';
import { AddTaskAction } from 'types/actions/add-task';

export const addTaskAction = (text: TaskType['text']): AddTaskAction => ({
	type: 'ADD_TASK',
	payload: {
		text,
	},
});
