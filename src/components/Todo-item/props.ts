import { TaskType } from '../../types/task-type';

export type Props = {
	task: TaskType;
	onClick?: (id: TaskType['id']) => void;
	onRemove?: (id: TaskType['id']) => void;
};
