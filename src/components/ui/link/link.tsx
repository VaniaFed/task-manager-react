import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import { NavHashLink } from 'react-router-hash-link';

import styles from './link.module.scss';

import type { Props } from './props';

const cx = classNames.bind(styles);

export const Link = forwardRef<HTMLAnchorElement, Props>(
	(
		{
			isExternal = false,
			smooth = false,
			children,
			href = '#',
			level = 'p-normal',
			color = 'black',
			underline = true,
			iconType,
			className,
			...rest
		},
		ref
	) => {
		const linkClass = cx(
			'link',
			`link_level_${level}`,
			color && [`link_color_${color}`],
			underline && 'link_underline',
			iconType && [`link_${iconType}`],
			className
		);
		return (
			<>
				{isExternal ? (
					<a className={linkClass} href={href} target="_blank" rel="noopener noreferrer" {...rest} ref={ref}>
						{children}
					</a>
				) : (
					<NavHashLink className={linkClass} to={href} smooth={smooth} ref={ref}>
						{children}
					</NavHashLink>
				)}
			</>
		);
	}
);

Link.displayName = 'Link';
