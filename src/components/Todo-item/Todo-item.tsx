import React, { useState } from 'react';
import classNames from 'classnames/bind';

import { Checkbox } from 'components/checkbox/checkbox';
import { TaskType } from 'types/';
import crossIcon from 'static/cross-23.svg';

import { Props } from './props';
import styles from './todo-item.module.scss';
import { Tag } from 'components/tag';

const cx = classNames.bind(styles);
export const TodoItem = ({ task, onClick = () => {}, onRemove = () => {} }: Props) => {
	const [isRemoveBtnShown, setIsRemoveBtnShown] = useState(false);

	const { id, text, isCompleted } = task;
	const containerClass = cx({ 'todo-item': true, 'todo-item_completed': isCompleted });

	const clickTag = () => {
		console.log(id);
	};

	return (
		<div
			className={containerClass}
			onClick={(e) => {
				e.preventDefault();
				onClick(id);
			}}
			onMouseEnter={() => setIsRemoveBtnShown(true)}
			onMouseLeave={() => setIsRemoveBtnShown(false)}>
			<Checkbox text={text} checked={isCompleted} />
			<Tag text="24.02 | 12:00" className={cx('todo-item__tag')} onClick={clickTag} />
			{isRemoveBtnShown && (
				<img
					className={styles['todo-item__remove-btn']}
					src={crossIcon}
					alt="Remove"
					onClick={() => onRemove(id)}></img>
			)}
		</div>
	);
};
