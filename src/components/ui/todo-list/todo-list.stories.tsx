import React from 'react';

import { TodoList } from './todo-list';

import type { Props } from './props';
import type { ComponentStory, Meta } from '@storybook/react';
import type { TaskType } from 'types/task-type';

const meta: Meta = {
	title: 'TodoList',
	component: TodoList,
};

export default meta;

const tasks: TaskType[] = [
	{
		id: 'sdklj',
		text: 'Task 1',
		isCompleted: true,
	},
	{
		id: 'klfjlsdkfjsd',
		text: 'Task 2',
		isCompleted: false,
	},
	{
		id: 'ghj',
		text: 'Task 3',
		isCompleted: false,
	},
	{
		id: 'ggg',
		text: 'Task 4',
		isCompleted: true,
	},
];

export const Default: ComponentStory<typeof TodoList> = (args: Props) => <TodoList {...args} />;

Default.args = {
	tasks,
};
