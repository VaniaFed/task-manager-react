import React from 'react';
import classNames from 'classnames/bind';

import styles from './todo-content-box.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const TodoContentBox: FC<Props> = ({ children }) => {
	return <div className={cx('todo-content-box')}>{children}</div>;
};
