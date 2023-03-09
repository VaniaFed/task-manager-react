import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Paragraph } from './Paragraph';
import { props } from './props';

export default {
	title: 'Paragraph',
	component: Paragraph,
} as Meta;

export const Regular: StoryFn = (args: props) => <Paragraph {...args}>Regular text paragarph</Paragraph>;

export const Small: StoryFn = (args: props) => (
	<Paragraph size="small" {...args}>
		Regular text paragarph
	</Paragraph>
);

export const Big: StoryFn = (args: props) => (
	<Paragraph size="big" {...args}>
		Regular text paragarph
	</Paragraph>
);
