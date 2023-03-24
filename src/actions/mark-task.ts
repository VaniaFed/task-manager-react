// @ts-ignore
import { MARK_TASK } from 'constants.ts';
import { TaskType } from 'types/task-type';
import { MarkTaskAction } from 'types/actions/mark-task';

export const markTask = (id: TaskType['id']): MarkTaskAction => ({
	type: MARK_TASK,
	payload: {
		id,
	},
});
