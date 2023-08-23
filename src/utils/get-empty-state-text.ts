import type { FilterType } from 'types';

export const getEmptyStateText = (filter: FilterType): string => {
	switch (filter) {
		case 'All':
			return 'Как-то пустовато... Добавим новую задачу?';
		case 'Active':
			return 'Активных задач пока нет';
		case 'Completed':
			return 'Вы еще не закончили ни одной задачи';
	}
};
