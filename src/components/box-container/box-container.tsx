import React from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './box-container.module.scss';

export const BoxContainer = ({ children, className }: Props) => {
	const cx = classNames.bind(styles);
	return <div className={cx('box-container', className)}>{children}</div>;
};
