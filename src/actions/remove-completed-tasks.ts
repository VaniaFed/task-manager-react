// @ts-ignore
import { REMOVE_COMPLETED_TASKS } from 'constants.ts';
import { RemoveCompletedTasksAction } from 'types/actions';

export const removeCompletedTasks = (): RemoveCompletedTasksAction => ({
	type: REMOVE_COMPLETED_TASKS,
});
