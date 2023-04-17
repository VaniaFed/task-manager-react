import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectors } from 'selectors/';
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

	const fetchTasks = () => {
		dispatch(actions.fetchTasksRequest());
	};

	useEffect(() => {
		// fetchTasks();
	}, []);

	const allTasks = useSelector(selectors.tasks);
	const completedTasks = useSelector(selectors.completedTasks);
	const activeTasks = useSelector(selectors.activeTasks);
	const filter = useSelector(selectors.filter);

	const getFilteredTasks = () => {
		switch (filter) {
			case 'All':
				return allTasks;

			case 'Active':
				return activeTasks;

			case 'Completed':
				return completedTasks;

			default:
				return allTasks;
		}
	};

	return <Todo tasks={getFilteredTasks()} filter={filter} createTask={createTask} className={className} />;
};
