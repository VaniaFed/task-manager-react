import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Heading } from './Heading';
import { props } from './props';

export default {
	title: 'Heading',
	component: Heading,
} as Meta;

export const H1: StoryFn = (args: props) => <Heading {...args} />;
export const H2: StoryFn = (args: props) => <Heading size="2" {...args} />;
export const H3: StoryFn = (args: props) => <Heading size="3" {...args} />;
export const WithSpan: StoryFn = (args: props) => (
	<Heading {...args}>
		Heading 1 <span>Little span</span>
	</Heading>
);
