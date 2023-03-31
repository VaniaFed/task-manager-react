// @ts-ignore
import { FETCH_TASKS_REQUEST } from 'constants.ts';
import { TaskType } from './../types/task-type';
import { put, call, takeEvery } from 'redux-saga/effects';
import { actions } from 'actions/';
import { services } from 'services/';

export function* fetchTasks() {
	try {
		const tasks: TaskType[] = yield call(services.fetchTasks);
		yield put(actions.fetchTasksSuccess(tasks));
	} catch {
		yield put(actions.fetchTasksError(new Error('Some error')));
	}
}

export function* watchFetchTasks() {
	yield takeEvery(FETCH_TASKS_REQUEST as any, fetchTasks);
}
