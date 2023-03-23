import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import { TodoList } from './todoList';
import { Props } from './props';
import { TaskType } from 'types/task-type';

export default {
	title: 'TodoList',
	component: TodoList,
} as Meta;

export const Default: ComponentStory<typeof TodoList> = (args: Props) => <TodoList {...args} />;

const tasks: TaskType[] = [
	{
		id: 'sdklj',
		text: 'Task 1',
		status: 'Active',
	},
	{
		id: 'klfjlsdkfjsd',
		text: 'Task 2',
		status: 'Active',
	},
	{
		id: 'ghj',
		text: 'Task 3',
		status: 'Active',
	},
	{
		id: 'ggg',
		text: 'Task 4',
		status: 'Completed',
	},
];

Default.args = {
	tasks,
};
