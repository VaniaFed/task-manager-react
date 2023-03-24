import React from 'react';
import classNames from 'classnames/bind';

import styles from './tab-item.module.scss';
import { Props } from './props';
import { Counter } from 'components/counter';

export const TabItem = ({ text, counter = 0, className, counterClassName }: Props) => {
	const cx = classNames.bind(styles);
	const resultClass = cx('tab-item', className);
	// const counterClass = cx('tab-item__counter_active')
	// как каунтер сделать актив?
	return (
		<button className={resultClass}>
			{text} <Counter value={counter} className={counterClassName} />
		</button>
	);
};
