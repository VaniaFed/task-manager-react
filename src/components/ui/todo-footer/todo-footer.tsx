import React from 'react';
import classNames from 'classnames/bind';

import { Tabs } from 'components/ui/tabs';
import { Button } from 'components/ui/button';
import { useAppDispatch } from 'store/hooks';
import { removeCompleted, changeFilter } from 'models/';

import styles from './todo-footer.module.scss';

import type { FC } from 'react';
import type { Props } from './props';
import type { FilterType, TabType } from 'types';

const cx = classNames.bind(styles);

export const TodoFooter: FC<Props> = ({ allTasks, activeTasks, completedTasks, filter }) => {
	const tabItems: TabType[] = [
		{ text: 'All', counter: allTasks.length },
		{ text: 'Active', counter: activeTasks.length },
		{ text: 'Completed', counter: completedTasks.length },
	];

	const dispatch = useAppDispatch();
	const handleRemoveCompleted = (): void => {
		dispatch(removeCompleted());
	};

	const handleChangeFilter = (filter: string): void => {
		dispatch(changeFilter(filter as FilterType));
	};

	return (
		<div className={cx('todo-footer')}>
			<Tabs tabs={tabItems} value={filter} onChange={handleChangeFilter} />
			{completedTasks.length > 0 && (
				<Button variant="small" onClick={handleRemoveCompleted} className={cx('todo-footer__button')}>
					Remove completed
				</Button>
			)}
		</div>
	);
};
