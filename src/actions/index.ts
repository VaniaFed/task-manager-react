import { markTask } from './mark-task';
import { addTask } from './add-task';
import { removeTask } from './remove-task';
import { fetchTasksRequest, fetchTasksSuccess, fetchTasksError } from './fetch-tasks';

export const actions = {
	addTask,
	removeTask,
	markTask,
	fetchTasksRequest,
	fetchTasksSuccess,
	fetchTasksError,
};
