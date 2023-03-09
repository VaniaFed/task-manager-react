import React from 'react';
import classNames from 'classnames/bind';

import styles from './counter.module.scss';
import { props } from './props';

export const Counter = ({ value = 0 }: props) => {
	const cx = classNames.bind(styles);
	const resultClass = cx('counter');
	return <span className={resultClass}>({value})</span>;
};
