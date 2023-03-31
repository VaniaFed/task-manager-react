// @ts-ignore
import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR } from 'constants.ts';
import { TaskType } from 'types/task-type';

export interface FetchTasksRequest {
	type: typeof FETCH_TASKS_REQUEST;
}

export interface FetchTasksSuccess {
	type: typeof FETCH_TASKS_SUCCESS;
	payload: {
		tasks: TaskType[];
	};
}

export interface FetchTasksError {
	type: typeof FETCH_TASKS_ERROR;
	payload: {
		message: Error;
	};
}
