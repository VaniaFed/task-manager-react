// @ts-ignore
import { REMOVE_TASK } from 'constants.ts';
import { TaskType } from 'types/task-type';

export interface RemoveTaskAction {
	type: typeof REMOVE_TASK;
	payload: {
		id: TaskType['id'];
	};
}
