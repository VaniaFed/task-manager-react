import React from 'react';
import classNames from 'classnames/bind';

import styles from './todo-content-box.module.scss';

const cx = classNames.bind(styles);

type Props = {
	children: React.ReactNode;
};

export const TodoContentBox = ({ children }: Props) => {
	return <div className={cx('todo-content-box')}>{children}</div>;
};
