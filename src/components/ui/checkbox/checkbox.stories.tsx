import React, { useState } from 'react';

import { Checkbox } from './checkbox';

import type { Meta, ComponentStory } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'Checkbox',
	component: Checkbox,
};

export default meta;

export const Unchecked: ComponentStory<typeof Checkbox> = (args: Props) => (
	<Checkbox {...args}>
		Нажимая кнопку, я принимаю условия
		<a href="#">Лицензионного договора</a>
	</Checkbox>
);

Unchecked.args = {};

export const Checked: ComponentStory<typeof Checkbox> = (args: Props) => <Checkbox {...args} />;

Checked.args = {
	children: 'Checked',
	checked: true,
};
