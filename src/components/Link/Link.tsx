import React from 'react';
import classNames from 'classnames/bind';

import styles from './link.module.scss';
import { Props } from './props';

export const Link = ({
	children,
	href = '#',
	target = '_blank',
	active = false,
	iconType,
	underline = true,
	size,
	color,
}: Props) => {
	const cx = classNames.bind(styles);
	const linkClass = cx(
		'link',
		iconType && [`link_${iconType}`],
		underline && 'link_underline',
		size && [`link_${size}`],
		active && [`link_active`],
		color && [`link_${color}`]
	);
	return (
		<a href={href} target={target} className={linkClass}>
			{children}
		</a>
	);
};
