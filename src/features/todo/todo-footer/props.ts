import type { FilterType, TaskType } from 'types';

export interface Props {
	allTasks: TaskType[];
	activeTasks: TaskType[];
	completedTasks: TaskType[];
	filter: FilterType;
}
