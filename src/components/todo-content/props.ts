import { TaskType } from 'types/task-type';

export type Props = {
	filterBy: string;
	counter: number;
	tasks: TaskType[];
};
