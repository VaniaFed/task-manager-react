import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelector } from 'selectors/tasks-selector';
import { filterSelector } from 'selectors/filter-selector';
import { actions } from 'actions/';

import { Todo } from 'components/todo';
import { Props } from './props';
import { services } from 'services/';

export const TodoSmart = ({ className }: Props) => {
	const dispatch = useDispatch();
	const createTask = (inputValue: string) => {
		if (inputValue.length > 0) {
			dispatch(actions.addTask(inputValue));
		}
	};

	const fetchTasks = () => {
		dispatch(actions.fetchTasksRequest());
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	const tasks = useSelector(tasksSelector);
	const filterBy = useSelector(filterSelector);

	return <Todo tasks={tasks} filterBy={filterBy} createTask={createTask} className={className} />;
};
