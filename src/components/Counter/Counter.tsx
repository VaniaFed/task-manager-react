import React from 'react';
import classNames from 'classnames/bind';

import styles from './counter.module.scss';
import { Props } from './props';

export const Counter = ({ value = 0 }: Props) => {
	const cx = classNames.bind(styles);
	const resultClass = cx('counter');
	return <span className={resultClass}>({value})</span>;
};
