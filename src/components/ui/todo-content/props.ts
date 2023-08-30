import type { TaskType, FilterType } from 'types';

export interface Props {
	filter: FilterType;
	counter: number;
	tasks: TaskType[];
	onMark: (id: string) => void;
	onRemove: (id: string) => void;
}
