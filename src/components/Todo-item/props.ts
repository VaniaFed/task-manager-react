import { TaskType } from '../../types/task-type';

export type Props = {
	task: TaskType;
	onClick?: () => void;
	onRemove?: (id: string) => void;
};
