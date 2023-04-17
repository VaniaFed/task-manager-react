import React from 'react';
import classNames from 'classnames/bind';
import startWork from 'static/start work.svg';

import { Props } from './props';
import styles from './empty-state.module.scss';

const cx = classNames.bind(styles);

export const EmptyState = ({ filter, className }: Props) => {
	const getEmptyStateText = () => {
		switch (filter) {
			case 'All':
				return 'Как-то пустовато... Добавим новую задачу?';

			case 'Active':
				return 'Активных задач пока нет';
			case 'Completed':
				return 'Вы еще не закончили ни одну задачу';
		}
	};
	return (
		<div className={cx('empty-state', className)}>
			{filter === 'All' && <img className={cx('empty-state__image')} src={startWork} alt="Start work" />}
			<p className={cx('empty-state__text paragraph')}>{getEmptyStateText()}</p>
		</div>
	);
};
