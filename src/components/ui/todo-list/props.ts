import type { TaskType } from 'types/task-type';

export interface Props {
	tasks: TaskType[];
	onMark: (id: string) => void;
	onRemove: (id: string) => void;
}
