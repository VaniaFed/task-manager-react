import { markTask } from './mark-task';
import { addTask } from './add-task';
import { removeTask } from './remove-task';
import { fetchTasksRequest, fetchTasksSuccess, fetchTasksError } from './fetch-tasks';
import { setFilter } from './set-filter';

export const actions = {
	addTask,
	removeTask,
	markTask,
	fetchTasksRequest,
	fetchTasksSuccess,
	fetchTasksError,
	setFilter,
};
