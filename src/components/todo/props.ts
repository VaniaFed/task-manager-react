import { FilterType } from './../../types/filter-type';
import { TaskType } from 'types/task-type';
export type Props = {
	tasks: TaskType[];
	filterBy: FilterType;
	createTask: (inputValue: string) => void;
};
