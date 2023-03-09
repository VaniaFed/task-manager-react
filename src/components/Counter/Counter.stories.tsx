import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Counter } from './Counter';
import { props } from './props';

export default {
	title: 'Counter',
	component: Counter,
} as Meta;

export const Default: StoryFn = (args: props) => <Counter value={53} {...args} />;
