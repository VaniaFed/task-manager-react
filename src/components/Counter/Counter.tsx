import React from 'react';
import classNames from 'classnames/bind';

import styles from './counter.module.scss';
import { Props } from './props';

export const Counter = ({ value = 0, className }: Props) => {
	const cx = classNames.bind(styles);
	const resultClass = cx('counter', className);
	return <span className={resultClass}>({value})</span>;
};
