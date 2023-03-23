import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import { Counter } from './counter';
import { Props } from './props';

export default {
	title: 'Counter',
	component: Counter,
} as Meta;

export const Default: ComponentStory<typeof Counter> = (args: Props) => <Counter value={53} {...args} />;
