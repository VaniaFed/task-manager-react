import { StoreType } from 'types/store-type';

export const activeTasks = (state: StoreType) => state.tasks.filter((task) => !task.isCompleted);
