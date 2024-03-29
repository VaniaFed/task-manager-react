import type { TaskType } from 'types/task-type';

export interface Props {
	task: TaskType;
	onMark?: (id: string) => void;
	onRemove?: (id: string) => void;
}
