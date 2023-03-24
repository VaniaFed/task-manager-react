import React from 'react';

import { BoxContainer } from 'components/box-container';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { TodoSmart } from 'containers/todo-smart';

import styles from './app.module.scss';

export const App = () => {
	return (
		<div className={styles.app}>
			<Header className={styles.app__header} />
			<BoxContainer>
				<TodoSmart />
			</BoxContainer>
			<Footer className={styles.page__footer} />
		</div>
	);
};
