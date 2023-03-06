import React, { ReactNode } from 'react';
import styles from './heading.modules.scss';
import { props } from './props';

export const Heading = ({ size = '1', children = 'Heading text' }: props) => {
	switch (size) {
		case '1':
			return <h1 className={styles.h1}>{children}</h1>;
			break;

		case '2':
			return <h2 className={styles.h2}>{children}</h2>;
			break;

		case '3':
			return <h3 className={styles.h3}>{children}</h3>;
			break;

		default:
			return <h1 className={styles.h1}>{children}</h1>;
			break;
	}
};
