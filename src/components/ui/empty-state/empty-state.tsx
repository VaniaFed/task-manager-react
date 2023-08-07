import React from 'react';
import classNames from 'classnames/bind';

import { getEmptyStateText } from 'utils/get-empty-state-text';
import startWork from 'static/start work.svg';

import styles from './empty-state.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const EmptyState: FC<Props> = ({ filter, className }) => {
	return (
		<div className={cx('empty-state', className)}>
			{filter === 'All' && <img className={cx('empty-state__image')} src={startWork} alt="Start work" />}
			<p className={cx('empty-state__text paragraph')}>{getEmptyStateText(filter)}</p>
		</div>
	);
};
