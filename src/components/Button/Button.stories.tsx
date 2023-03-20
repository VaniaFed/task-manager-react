import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import { Button } from './Button';
import { Props } from './props';

export default {
	title: 'Button',
	component: Button,
} as Meta;

const logging = () => console.log('Hello, warlord');

export const Primary: ComponentStory<typeof Button> = (args: Props) => (
	<Button onClick={logging} {...args}>
		hi
	</Button>
);
export const Secondary: ComponentStory<typeof Button> = (args: Props) => (
	<Button onClick={logging} type="secondary" {...args} />
);
export const More: ComponentStory<typeof Button> = (args: Props) => <Button onClick={logging} type="more" {...args} />;
export const Small: ComponentStory<typeof Button> = (args: Props) => (
	<Button onClick={logging} type="small" {...args} />
);
