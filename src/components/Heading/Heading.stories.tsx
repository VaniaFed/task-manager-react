import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import { Heading } from './heading';
import { Props } from './props';

export default {
	title: 'Heading',
	component: Heading,
} as Meta;

export const H1: ComponentStory<typeof Heading> = (args: Props) => <Heading {...args} />;
export const H2: ComponentStory<typeof Heading> = (args: Props) => <Heading size="2" {...args} />;
export const H3: ComponentStory<typeof Heading> = (args: Props) => <Heading size="3" {...args} />;

export const WithSpan: ComponentStory<typeof Heading> = (args: Props) => (
	<Heading {...args}>
		Heading 1 <span>Little span</span>
	</Heading>
);
