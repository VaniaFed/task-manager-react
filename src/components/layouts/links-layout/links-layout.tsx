import React from 'react';
import classNames from 'classnames/bind';

import styles from './links-layout.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const LinksLayout: FC<Props> = ({ children, gap = '35', className }) => {
	return <ul className={cx('links-layout', `links-layout_gap_${gap}`, className)}>{children}</ul>;
};
