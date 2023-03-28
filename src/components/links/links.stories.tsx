import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import { Links } from './links';
import { Props, TypeLink } from './props';

export default {
	title: 'Links',
	component: Links,
} as Meta;

const links: TypeLink[] = [
	{
		text: 'link1',
		href: '#',
	},
	{
		text: 'link2',
		href: '#',
	},
	{
		text: 'link3',
		href: '#',
	},
	{
		text: 'link4',
		href: '#',
	},
];

export const Default: ComponentStory<typeof Links> = (args: Props) => <Links {...args} />;

Default.args = {
	links,
};
