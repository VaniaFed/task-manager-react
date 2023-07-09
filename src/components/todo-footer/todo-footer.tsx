import React from 'react';
import classNames from 'classnames/bind';

import { TabSmart } from 'containers/tab-smart';
import { RemoveCompleted } from 'containers/remove-completed';

import { Props } from './props';
import styles from './todo-footer.module.scss';
const cx = classNames.bind(styles);

export const TodoFooter = ({ filter }: Props) => {
	return (
		<div className={cx('todo__footer')}>
			<TabSmart filter={filter} />
			<RemoveCompleted />
		</div>
	);
};
