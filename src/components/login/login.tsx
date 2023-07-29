import React from 'react';
import classNames from 'classnames/bind';

import { Link } from 'components/ui/link';

import styles from './login.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

export const Login: FC<Props> = ({ className }) => {
	const cx = classNames.bind(styles);
	return (
		<span className={cx('login', className)}>
			<Link href="#" className={cx('header__link')} level="p-small">
				Войти
			</Link>
			/
			<Link href="#" className={cx('header__link')} level="p-small">
				Зарегистрироваться
			</Link>
		</span>
	);
};
