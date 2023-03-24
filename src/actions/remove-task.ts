// @ts-ignore
import { REMOVE_TASK } from 'constants.ts';
import { TaskType } from 'types/task-type';
import { RemoveTaskAction } from 'types/actions/remove-task';

export const removeTask = (id: TaskType['id']): RemoveTaskAction => ({
	type: REMOVE_TASK,
	payload: {
		id,
	},
});
