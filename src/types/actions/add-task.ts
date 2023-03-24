// @ts-ignore
import { ADD_TASK } from 'constants.ts';
import { TaskType } from 'types/task-type';

export interface AddTaskAction {
	type: typeof ADD_TASK;
	payload: {
		text: TaskType['text'];
	};
}
