import React from 'react';
import classNames from 'classnames/bind';

import styles from './todo.module.scss';
import { Input } from 'components/input';
import { TodoContent } from 'components/todo-content/todo-content';
import { Props } from './props';
import { Tab } from 'components/tab';
import { TabType } from 'types/tab-type';

const cx = classNames.bind(styles);
// мб вынести в стор
// как сделать активным один из?
const tabItems: TabType[] = [
	{
		text: 'All',
		counter: 0,
		isActive: true,
	},
	{
		text: 'Active',
		counter: 2,
	},
	{
		text: 'Completed',
		counter: 3,
	},
];

export const Todo = ({ tasks, filterBy, createTask, className }: Props) => {
	return (
		<div className={cx('todo', className)}>
			<Input
				placeholder="Введите задачу"
				onEnter={createTask}
				onBlur={createTask}
				className={cx('todo__input')}></Input>
			<TodoContent tasks={tasks} filterBy={filterBy} counter={tasks.length} />
			<Tab active={filterBy} items={tabItems} />
		</div>
	);
};
