import type { RootState } from 'store/store';
import type { FilterType, TaskType } from 'types';

export const selectTasks = (state: RootState): TaskType[] => state.todo.tasks;

export const selectActiveTasks = (state: RootState): TaskType[] => state.todo.tasks.filter((task) => !task.isCompleted);

export const selectCompletedTasks = (state: RootState): TaskType[] =>
	state.todo.tasks.filter((task) => task.isCompleted);

export const selectFilter = (state: RootState): FilterType => state.todo.filter;
