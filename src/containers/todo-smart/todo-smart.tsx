import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelector } from 'selectors/tasks-selector';
import { filterSelector } from 'selectors/filter-selector';
import { addTaskAction } from 'actions/add-task';

import { Todo } from 'components/todo';

export const TodoSmart = () => {
	const dispatch = useDispatch();
	const createTask = (inputValue: string) => {
		if (inputValue.length > 0) {
			dispatch(addTaskAction(inputValue));
		}
	};

	const tasks = useSelector(tasksSelector);
	const filterBy = useSelector(filterSelector);

	return <Todo tasks={tasks} filterBy={filterBy} createTask={createTask} />;
};
