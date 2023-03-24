import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelector } from 'selectors/tasks-selector';
import { filterSelector } from 'selectors/filter-selector';
import { actions } from 'actions/';

import { Todo } from 'components/todo';
import { Props } from './props';

export const TodoSmart = ({ className }: Props) => {
	const dispatch = useDispatch();
	const createTask = (inputValue: string) => {
		if (inputValue.length > 0) {
			dispatch(actions.addTask(inputValue));
		}
	};

	const tasks = useSelector(tasksSelector);
	const filterBy = useSelector(filterSelector);

	return <Todo tasks={tasks} filterBy={filterBy} createTask={createTask} className={className} />;
};
