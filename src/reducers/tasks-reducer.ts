import { v4 } from 'uuid';
import {
	ADD_TASK,
	REMOVE_TASK,
	MARK_TASK,
	FETCH_TASKS_SUCCESS,
	FETCH_TASKS_ERROR,
	// @ts-ignore
} from 'constants.ts';

import { TaskType } from 'types/task-type';
import { AddTaskAction, MarkTaskAction, RemoveTaskAction, FetchTasksSuccess, FetchTasksError } from 'types/actions';

type Action = AddTaskAction & RemoveTaskAction & MarkTaskAction & FetchTasksSuccess & FetchTasksError;

export const tasksReducer: any = (tasks = [] as TaskType[], action: Action) => {
	switch (action.type) {
		case FETCH_TASKS_SUCCESS: {
			return action.payload.tasks;
		}

		case FETCH_TASKS_ERROR: {
			console.log(action.payload.message);
		}

		case ADD_TASK: {
			const { text } = action.payload;
			return [
				{
					id: v4(),
					text,
					status: 'Active',
				},
				...tasks,
			];
		}

		case REMOVE_TASK: {
			const { id } = action.payload;
			return tasks.filter((task) => task.id !== id);
		}

		case MARK_TASK: {
			const { id } = action.payload;
			return tasks.map((task) => {
				if (task.id === id) {
					return {
						...task,
						isCompleted: !task.isCompleted,
					};
				}
				return task;
			});
		}

		default:
			return tasks;
	}
};
