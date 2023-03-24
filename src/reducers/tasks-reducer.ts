import { v4 } from 'uuid';
// @ts-ignore
import { ADD_TASK, REMOVE_TASK, MARK_TASK } from 'constants.ts';
import { TaskType } from 'types/task-type';
import { AddTaskAction, MarkTaskAction, RemoveTaskAction } from 'types/actions';

type Action = AddTaskAction & RemoveTaskAction & MarkTaskAction;

const initialState: TaskType[] = [
	{
		id: 'sdklj',
		text: 'Task 1',
		isCompleted: true,
	},
	{
		id: 'klfjlsdkfjsd',
		text: 'Task 2',
		isCompleted: false,
	},
	{
		id: 'ghj',
		text: 'Task 3',
		isCompleted: false,
	},
	{
		id: 'ggg',
		text: 'Task 4',
		isCompleted: true,
	},
];

export const tasksReducer: any = (tasks = initialState, action: Action) => {
	switch (action.type) {
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
