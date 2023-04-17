import React from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import { TabItem } from 'components/tab-item';
import styles from './tab.module.scss';

const cx = classNames.bind(styles);

export const Tab = ({ items, filter, setFilter, className }: Props) => {
	return (
		<ul className={cx('tab', className)}>
			{items.map((tabItem, i) => (
				<li
					key={i}
					className={cx(
						'tab__item',
						tabItem.text.toLowerCase() === filter.toLowerCase() && 'tab__item_active'
					)}>
					<TabItem
						text={tabItem.text}
						counter={tabItem.counter}
						counterClassName={tabItem.text === filter && cx('tab__counter_active')}
						onClick={setFilter}
					/>
				</li>
			))}
		</ul>
	);
};
