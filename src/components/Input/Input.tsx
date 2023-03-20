import React from 'react';
import classNames from 'classnames/bind';

import styles from './input.module.scss';
import { Props } from './props';

export const Input = ({ value, placeholder, className, onEnter = () => {}, onBlur = () => {} }: Props) => {
	const cx = classNames.bind(styles);
	const resultClass = cx('input');
	return (
		<input
			type="text"
			defaultValue={value}
			className={resultClass}
			placeholder={placeholder}
			onKeyDown={({ key }) => {
				if (key === 'Enter') {
					onEnter();
				}
			}}
			onBlur={() => onBlur()}></input>
	);
};
