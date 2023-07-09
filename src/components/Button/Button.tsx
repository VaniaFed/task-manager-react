import React from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './button.module.scss';

const cx = classNames.bind(styles);
export const Button = ({ children = 'Button text', type = 'primary', onClick = () => {} }: Props) => {
	const resultClass = cx('button', `button_${type}`);
	return (
		<button className={resultClass} onClick={onClick}>
			{children}
		</button>
	);
};
