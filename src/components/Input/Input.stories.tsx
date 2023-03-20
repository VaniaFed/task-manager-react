import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';

import { Input } from './Input';
import { Props } from './props';

export default {
	title: 'Input',
	component: Input,
} as Meta;

export const Default: ComponentStory<typeof Input> = (args: Props) => <Input {...args} />;

Default.args = {
	placeholder: 'Почитать',
};

export const WithText: ComponentStory<typeof Input> = (args: Props) => <Input {...args} />;

WithText.args = {
	placeholder: 'Почитать',
	value: 'Hello world',
};
