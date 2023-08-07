import React from 'react';

import { TodoItem } from 'features/todo/todo-item';

import type { Meta, ComponentStory } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'TodoItem',
	component: TodoItem,
};

export default meta;

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
