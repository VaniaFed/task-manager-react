import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Tab } from 'components/tab';
import { actions } from 'actions/';
import { selectors } from 'selectors/';
import { TabType, FilterType } from 'types/';

import { Props } from './props';

export const TabSmart = ({ filter }: Props) => {
	const dispatch = useDispatch();

	const setFilter = (filter: FilterType) => {
		dispatch(actions.setFilter(filter));
	};

	const allTasks = useSelector(selectors.tasks);
	const activeTasks = useSelector(selectors.activeTasks);
	const completedTasks = useSelector(selectors.completedTasks);

	const tabItems: TabType[] = [
		{
			text: 'All',
			counter: allTasks.length,
		},
		{
			text: 'Active',
			counter: activeTasks.length,
		},
		{
			text: 'Completed',
			counter: completedTasks.length,
		},
	];

	return <Tab filter={filter} setFilter={setFilter} items={tabItems} />;
};
