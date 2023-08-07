import React from 'react';
import classNames from 'classnames/bind';

import styles from './counter.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Counter: FC<Props> = ({ value = 0, className }) => {
	return <span className={cx('counter', className)}>({value})</span>;
};
