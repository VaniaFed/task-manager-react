import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './heading.module.scss';

const cx = classNames.bind(styles);

export const Heading = ({ size = '1', children = 'Heading text', className }: Props) => {
	switch (size) {
		case '1':
			return <h1 className={cx('h1', className)}>{children}</h1>;

		case '2':
			return <h2 className={cx('h2', className)}>{children}</h2>;

		case '3':
			return <h3 className={cx('h3', className)}>{children}</h3>;
	}
};
