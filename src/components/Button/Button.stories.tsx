import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Button } from './Button';
import { props } from './props';

export default {
	title: 'Button',
	component: Button,
} as Meta;

export const Primary: StoryFn = (args: props) => <Button {...args} />;
export const Secondary: StoryFn = (args: props) => <Button type="secondary" {...args} />;
export const More: StoryFn = (args: props) => <Button type="more" {...args} />;
export const Small: StoryFn = (args: props) => <Button type="small" {...args} />;
