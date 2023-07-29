import React from 'react';

import { Links } from './links';

import type { Props, TypeLink } from './props';
import type { ComponentStory, Meta } from '@storybook/react';

const meta: Meta = {
	title: 'Links',
	component: Links,
};

export default meta;

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
