import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './checkbox.module.scss';

import type { Props } from './props';

const cx = classNames.bind(styles);

export const Checkbox = forwardRef<HTMLInputElement, Props>(({ children, checked, value, ...rest }, ref) => {
	return (
		<label className={cx('checkbox')}>
			<span>{checked}</span>
			<input className={cx('checkbox__input')} type="checkbox" {...rest} value={value} ref={ref} />
			<span className={cx('fake-control', checked === true && 'fake-control_completed')} />
			{children}
		</label>
	);
});

Checkbox.displayName = 'Checkbox';
