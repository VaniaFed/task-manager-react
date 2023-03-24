// @ts-ignore
import { MARK_TASK } from 'constants.ts';
import { TaskType } from 'types/task-type';

export interface MarkTaskAction {
	type: typeof MARK_TASK;
	payload: {
		id: TaskType['id'];
	};
}
