import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import { Link } from './link';
import { Props } from './props';

export default {
	title: 'Link',
	component: Link,
} as Meta;

export const Default: ComponentStory<typeof Link> = (args: Props) => <Link href="#">Link 1</Link>;

export const VK: ComponentStory<typeof Link> = (args: Props) => <Link iconType="vk" {...args} />;
export const INST: ComponentStory<typeof Link> = (args: Props) => <Link iconType="inst" {...args} />;
export const FB: ComponentStory<typeof Link> = (args: Props) => <Link iconType="fb" {...args} />;

export const VK_With_Text: ComponentStory<typeof Link> = (args: Props) => (
	<Link iconType="vk" {...args}>
		VK
	</Link>
);
