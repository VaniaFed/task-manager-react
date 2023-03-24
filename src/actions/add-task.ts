// @ts-ignore
import { ADD_TASK } from 'constants.ts';
import { TaskType } from 'types/task-type';
import { AddTaskAction } from 'types/actions/add-task';

export const addTask = (text: TaskType['text']): AddTaskAction => ({
	type: ADD_TASK,
	payload: {
		text,
	},
});
