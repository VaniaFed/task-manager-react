import { v4 } from 'uuid';

import type { TaskType } from 'types';

export const createTask = (text: string): TaskType => ({
	id: v4(),
	text,
	isCompleted: false,
});
