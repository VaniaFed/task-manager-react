import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import { Tabs } from 'components/ui/tabs';
import { Button } from 'components/ui/button';

import { selectTasks, selectActiveTasks, selectCompletedTasks, removeCompleted, changeFilter } from '../todo-slice';

import styles from './todo-footer.module.scss';

import type { FC } from 'react';
import type { Props } from './props';
import type { FilterType, TabType } from 'types';

const cx = classNames.bind(styles);

export const TodoFooter: FC<Props> = ({ filter }) => {
	const allTasks = useSelector(selectTasks);
	const activeTasks = useSelector(selectActiveTasks);
	const completedTasks = useSelector(selectCompletedTasks);
	const tabItems: TabType[] = [
		{ text: 'All', counter: allTasks.length },
		{ text: 'Active', counter: activeTasks.length },
		{ text: 'Completed', counter: completedTasks.length },
	];

	const dispatch = useDispatch();
	const handleRemoveCompleted = (): void => {
		dispatch(removeCompleted());
	};

	const handleChangeFilter = (filter: string): void => {
		dispatch(changeFilter(filter as FilterType));
	};

	return (
		<div className={cx('todo__footer')}>
			<Tabs tabs={tabItems} value={filter} onChange={handleChangeFilter} />
			{allTasks.length > 0 && (
				<Button variant="small" onClick={handleRemoveCompleted}>
					Remove completed
				</Button>
			)}
		</div>
	);
};
