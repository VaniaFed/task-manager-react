import { RemoveTaskAction } from 'types/actions/remove-task';
import { AddTaskAction } from 'types/actions/add-task';
import { TaskType } from 'types/task-type';
import { v4 } from 'uuid';

type Action = AddTaskAction & RemoveTaskAction;

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
		case 'ADD_TASK': {
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
		case 'REMOVE_TASK': {
			const { id } = action.payload;
			return tasks.filter((task) => task.id !== id);
		}

		default:
			return tasks;
	}
};
