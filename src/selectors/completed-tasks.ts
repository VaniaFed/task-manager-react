import { StoreType } from 'types/store-type';

export const completedTasks = (state: StoreType) => state.tasks.filter((task) => task.isCompleted);
