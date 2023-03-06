import React from 'react';
import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { props } from './props';

export const Button = ({ children = 'Button text', type = 'primary' }: props) => {
	const cx = classNames.bind(styles);
	const resultClass = cx('button', `button_${type}`);
	return <button className={resultClass}>{children}</button>;
};
