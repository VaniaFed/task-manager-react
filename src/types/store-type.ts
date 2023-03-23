import { FilterType } from 'types/filter-type';
import { TaskType } from 'types/task-type';

export type StoreType = {
	tasks: TaskType[];
	filter: FilterType;
};
