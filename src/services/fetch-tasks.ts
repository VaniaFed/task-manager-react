import { TaskType } from './../types/task-type';

type ServerTaskType = {
	userId: string;
	id: string;
	title: string;
	completed: boolean;
};

export const fetchTasks = async () => {
	const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
	const tasks: ServerTaskType[] = await resp.json();
	return formatTasks(tasks);
};

const formatTasks = (tasks: ServerTaskType[]): TaskType[] =>
	tasks.map((task) => ({
		id: task.id,
		text: task.title,
		isCompleted: task.completed,
	}));
