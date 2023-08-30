import type { RootState } from 'store/store';
import type { TaskType } from 'types';

export const selectTasks = (state: RootState): TaskType[] => state.tasks;

export const selectActiveTasks = (state: RootState): TaskType[] => state.tasks.filter((task) => !task.isCompleted);

export const selectCompletedTasks = (state: RootState): TaskType[] => state.tasks.filter((task) => task.isCompleted);
