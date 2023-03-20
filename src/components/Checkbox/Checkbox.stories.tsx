import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';

import { Checkbox } from './Checkbox';
import { Props } from './props';

export default {
	title: 'Checkbox',
	component: Checkbox,
} as Meta;

export const Unchecked: ComponentStory<typeof Checkbox> = (args: Props) => <Checkbox {...args} />;

Unchecked.args = {
	text: 'task name',
	onChange: (checked: boolean) => {
		console.log(checked);
	},
};

export const Checked: ComponentStory<typeof Checkbox> = (args: Props) => <Checkbox {...args} />;

Checked.args = {
	text: 'Checked',
	checked: true,
	onChange: (checked: boolean) => {
		console.log(checked);
	},
};
