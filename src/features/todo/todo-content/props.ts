import type { TaskType, FilterType } from 'types';

export interface Props {
	filter: FilterType;
	counter: number;
	tasks: TaskType[];
}
