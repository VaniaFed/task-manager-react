import { TaskType } from './../types/task-type';
import { RemoveTaskAction } from 'types/actions/remove-task';

export const removeTaskAction = (id: TaskType['id']): RemoveTaskAction => ({
	type: 'REMOVE_TASK',
	payload: {
		id,
	},
});
