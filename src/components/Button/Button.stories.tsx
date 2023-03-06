import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Button } from './Button';
import { props } from './props';

export default {
	title: 'Button',
	component: Button,
} as Meta;

const logging = () => console.log('Hello, warlord');

export const Primary: StoryFn = (args: props) => <Button onClick={logging} {...args} />;
export const Secondary: StoryFn = (args: props) => <Button onClick={logging} type="secondary" {...args} />;
export const More: StoryFn = (args: props) => <Button onClick={logging} type="more" {...args} />;
export const Small: StoryFn = (args: props) => <Button onClick={logging} type="small" {...args} />;
