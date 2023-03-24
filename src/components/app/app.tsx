import React from 'react';

import { BoxContainer } from 'components/box-container';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { TodoSmart } from 'containers/todo-smart';

import styles from './app.module.scss';
import classNames from 'classnames/bind';

export const App = () => {
	const cx = classNames.bind(styles);

	return (
		<div className={cx('app')}>
			<Header className={cx('app__header')} />
			<BoxContainer>
				<TodoSmart className={cx('app__todo')} />
			</BoxContainer>
			<Footer className={cx('page__footer')} />
		</div>
	);
};
