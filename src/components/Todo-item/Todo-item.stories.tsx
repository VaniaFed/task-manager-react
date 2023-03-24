import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';

import { TodoItem } from './todo-item';
import { Props } from './props';

export default {
	title: 'TodoItem',
	component: TodoItem,
} as Meta;

export const Active: ComponentStory<typeof TodoItem> = (args: Props) => <TodoItem {...args} />;

Active.args = {
	task: {
		id: 'klfjlsdkfjsd',
		text: 'Task 1',
		isCompleted: false,
	},
};

export const Completed: ComponentStory<typeof TodoItem> = (args: Props) => <TodoItem {...args} />;

Completed.args = {
	task: {
		id: 'ghj',
		text: 'Task 2',
		isCompleted: true,
	},
};
