import React, { useState } from 'react';
import classNames from 'classnames/bind';
import crossIcon from 'static/cross-23.svg';

import styles from './todo-item.module.scss';
import { Props } from './props';
import { Checkbox } from 'components/checkbox/checkbox';

export const TodoItem = ({ task, onClick, onRemove }: Props) => {
	const [isRemoveBtnShown, setIsRemoveBtnShown] = useState(false);

	const { id, text, status } = task;
	const cx = classNames.bind(styles);
	const containerClass = cx({ 'todo-item': true, 'todo-item_completed': status === 'Completed' });

	return (
		<div
			className={containerClass}
			onMouseEnter={() => setIsRemoveBtnShown(true)}
			onMouseLeave={() => setIsRemoveBtnShown(false)}>
			<Checkbox text={text} checked={status === 'Completed'} onChange={onClick} />
			{isRemoveBtnShown && (
				<img
					className={styles['todo-item__remove-btn']}
					src={crossIcon}
					alt="Remove"
					onClick={() => onRemove?.(id)}></img>
			)}
		</div>
	);
};
