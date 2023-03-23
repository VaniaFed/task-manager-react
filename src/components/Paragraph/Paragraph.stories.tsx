import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import { Paragraph } from './paragraph';
import { Props } from './props';

export default {
	title: 'Paragraph',
	component: Paragraph,
} as Meta;

export const Regular: ComponentStory<typeof Paragraph> = (args: Props) => (
	<Paragraph {...args}>Regular text paragarph</Paragraph>
);

export const Small: ComponentStory<typeof Paragraph> = (args: Props) => (
	<Paragraph size="small" {...args}>
		Regular text paragarph
	</Paragraph>
);

export const Big: ComponentStory<typeof Paragraph> = (args: Props) => (
	<Paragraph size="big" {...args}>
		Regular text paragarph
	</Paragraph>
);
