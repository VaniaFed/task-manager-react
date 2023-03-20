import React from 'react';
import classNames from 'classnames/bind';
import crossIcon from 'static/cross-23.svg';

import styles from './todo-item.module.scss';
import { Props } from './props';
import { Checkbox } from 'components/Checkbox/Checkbox';

export const TodoItem = ({ task, onClick, onRemove }: Props) => {
	const { id, text, status } = task;
	const cx = classNames.bind(styles);
	const containerClass = cx({ 'todo-item': true, 'todo-item_completed': status === 'Completed' });
	return (
		<div className={containerClass} data-task-id={id}>
			<Checkbox text={text} checked={status === 'Completed'} onChange={onClick} />
			<img className={styles['todo-item__remove-btn']} src={crossIcon} alt="Remove" onClick={onRemove}></img>
		</div>
	);
};
