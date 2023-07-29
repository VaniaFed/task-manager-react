import React, { useState } from 'react';
import classNames from 'classnames/bind';

import { TabItem } from 'components/ui/tabs/tab-item';
import { Counter } from 'components/ui/counter';

import styles from './tabs.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Tabs: FC<Props> = ({ tabs, value, className, onChange = () => {} }) => {
	const [tab, setTab] = useState(value ?? tabs[0].text);
	return (
		<menu className={cx('tabs', className)}>
			{tabs.map((tabItem, i) => (
				<li className={cx('tabs__item', tabItem.text === tab && 'tabs__item_active')} key={i}>
					<TabItem
						label={tabItem.text}
						onClick={(label) => {
							setTab(label);
							onChange(label);
						}}>
						{tabItem.counter !== undefined && (
							<Counter value={tabItem.counter} className={cx('tabs__counter')} />
						)}
					</TabItem>
				</li>
			))}
		</menu>
	);
};
