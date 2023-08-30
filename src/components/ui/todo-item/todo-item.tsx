import React, { useState } from 'react';
import classNames from 'classnames/bind';

import { Checkbox } from 'components/ui/checkbox';
import { Paragraph } from 'components/ui/paragraph';
import crossIcon from 'static/cross-23.svg';

import styles from './todo-item.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const TodoItem: FC<Props> = ({ task, onMark = () => {}, onRemove = () => {} }) => {
	const [isRemoveBtnShown, setIsRemoveBtnShown] = useState(false);

	const { id, text, isCompleted } = task;
	return (
		<div
			className={cx('todo-item', isCompleted && 'todo-item_completed')}
			onClick={(e) => {
				e.preventDefault();
				onMark(id);
			}}
			onMouseEnter={() => {
				setIsRemoveBtnShown(true);
			}}
			onMouseLeave={() => {
				setIsRemoveBtnShown(false);
			}}>
			<Checkbox checked={isCompleted} readOnly>
				<Paragraph>{text}</Paragraph>
			</Checkbox>
			{isRemoveBtnShown && (
				<img
					className={styles['todo-item__remove-btn']}
					src={crossIcon}
					alt="Remove"
					onClick={() => {
						onRemove(id);
					}}></img>
			)}
		</div>
	);
};
