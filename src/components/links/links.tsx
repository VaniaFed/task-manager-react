import React from 'react';
import classNames from 'classnames/bind';

import styles from './links.module.scss';
import { Props } from './props';
import { Link } from 'components/link/link';

export const Links = ({ links, className, color }: Props) => {
	const cx = classNames.bind(styles);
	return (
		<ul className={cx('links', className)}>
			{links.map((link, key) => (
				<li key={key} className={cx('links__item')}>
					<Link
						href={link.href}
						target="_blank"
						active={link.isActive}
						color={color}
						iconType={link.iconType}>
						{link.text}
					</Link>
				</li>
			))}
		</ul>
	);
};
