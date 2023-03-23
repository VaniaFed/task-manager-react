import React from 'react';
import classNames from 'classnames/bind';

import styles from './todo-content.module.scss';
import { Props } from './props';
import { Heading } from 'components/heading';
import { TodoList } from 'components/todo-list';
import { Counter } from 'components/counter';

export const TodoContent = ({ tasks, filterBy, counter }: Props) => {
	const cx = classNames.bind(styles);
	const resultClass = cx('todo-content');

	return (
		<div className={resultClass}>
			<Heading>
				{filterBy}
				<Counter value={counter} />
			</Heading>
			<TodoList tasks={tasks} />
		</div>
	);
};
