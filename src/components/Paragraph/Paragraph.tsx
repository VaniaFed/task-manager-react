import React from 'react';
import classNames from 'classnames/bind';

import styles from './paragraph.module.scss';
import { props } from './props';

export const Paragraph = ({ children = 'Paragraph text', size = 'regular' }: props) => {
	const cx = classNames.bind(styles);
	const resultClass = cx('paragraph', `paragraph_size_${size}`);
	return <p className={resultClass}>{children}</p>;
};
