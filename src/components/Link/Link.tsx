import React from 'react';
import classNames from 'classnames/bind';

import styles from './link.module.scss';
import { Props } from './props';

export const Link = ({ children, iconType, href = '#', target = '_blank' }: Props) => {
	const cx = classNames.bind(styles);
	const resultClass = cx({ link: true }, iconType && [`link_${iconType}`]);
	return (
		<a href={href} target={target} className={resultClass}>
			{children}
		</a>
	);
};
