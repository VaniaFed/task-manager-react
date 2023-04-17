import React from 'react';
import classNames from 'classnames/bind';

import styles from './todo.module.scss';
import { Input } from 'components/input';
import { TodoContent } from 'components/todo-content/todo-content';
import { Props } from './props';
import { TabSmart } from 'containers/tab-smart';

const cx = classNames.bind(styles);
export const Todo = ({ tasks, filter, createTask, className }: Props) => {
	return (
		<div className={cx('todo', className)}>
			<Input
				placeholder="Введите задачу"
				onEnter={createTask}
				onBlur={createTask}
				className={cx('todo__input')}></Input>
			<TodoContent tasks={tasks} filter={filter} counter={tasks.length} />
			<TabSmart filter={filter} />
		</div>
	);
};
