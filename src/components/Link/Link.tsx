import React from 'react';
import classNames from 'classnames/bind';

import styles from './link.module.scss';
import { Props } from './props';

export const Link = ({
	children,
	iconType,
	href = '#',
	target = '_blank',
	underline = true,
	size,
	active = false,
}: Props) => {
	const cx = classNames.bind(styles);
	const resultClass = cx(
		'link',
		iconType && [`link_${iconType}`],
		underline && 'link_underline',
		size && [`link_${size}`],
		active && [`link_active`]
	);
	return (
		<a href={href} target={target} className={resultClass}>
			{children}
		</a>
	);
};
