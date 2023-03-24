import React from 'react';
import classNames from 'classnames/bind';

import styles from './tab.module.scss';
import { Props } from './props';
import { TabItem } from 'components/tab-item';

// наверное нужно стейт делать
export const Tab = ({ items, className, active }: Props) => {
	const cx = classNames.bind(styles);
	const resultClass = cx('tab', className);

	return (
		<ul className={resultClass}>
			{items.map((tabItem, i) => (
				<li key={i} className={cx('tab__item', tabItem.isActive && 'tab__item_active')}>
					<TabItem
						text={tabItem.text}
						counter={tabItem.counter}
						counterClassName={tabItem.isActive && cx('tab__counter_active')}
					/>
				</li>
			))}
		</ul>
	);
};
