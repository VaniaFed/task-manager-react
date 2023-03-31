import { all } from 'redux-saga/effects';
import { watchFetchTasks } from './fetch-tasks';

export function* rootSaga() {
	yield all([watchFetchTasks()]);
}
