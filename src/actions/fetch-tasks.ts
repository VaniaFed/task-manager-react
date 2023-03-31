import { FetchTasksRequest, FetchTasksSuccess, FetchTasksError } from 'types/actions';
import { TaskType } from 'types/task-type';
// @ts-ignore
import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR } from 'constants.ts';

export const fetchTasksRequest = (): FetchTasksRequest => {
	return {
		type: FETCH_TASKS_REQUEST,
	};
};

export const fetchTasksSuccess = (tasks: TaskType[]): FetchTasksSuccess => {
	return {
		type: FETCH_TASKS_SUCCESS,
		payload: { tasks },
	};
};

export const fetchTasksError = (message: Error): FetchTasksError => {
	return {
		type: FETCH_TASKS_ERROR,
		payload: { message },
	};
};
