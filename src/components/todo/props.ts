import { FilterType } from './../../types/filter-type';
import { TaskType } from 'types/task-type';
export type Props = {
	tasks: TaskType[];
	filter: FilterType;
	createTask: (inputValue: string) => void;
	className?: string;
};
