import React from 'react';
import classNames from 'classnames/bind';

import { Link } from 'components/ui/link';

import styles from './links.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

export const Links: FC<Props> = ({ links, className, color }) => {
	const cx = classNames.bind(styles);
	return (
		<ul className={cx('links', className)}>
			{links.map((link, key) => (
				<li key={key} className={cx('links__item')}>
					<Link href={link.href} color={color} iconType={link.iconType}>
						{link.text}
					</Link>
				</li>
			))}
		</ul>
	);
};
