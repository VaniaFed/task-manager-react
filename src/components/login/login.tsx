import React from 'react';
import classNames from 'classnames/bind';

import { Link } from 'components/link';

import { Props } from './props';
import styles from './login.module.scss';

export const Login = ({ className }: Props) => {
	const cx = classNames.bind(styles);
	return (
		<span className={cx('login', className)}>
			<Link href="#" className={cx('header__link')} size="small">
				Войти
			</Link>
			/
			<Link href="#" className={cx('header__link')} size="small">
				Зарегистрироваться
			</Link>
		</span>
	);
};
