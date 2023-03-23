import React from 'react';
import styles from './box-container.module.scss';
import { Props } from './props';

export const BoxContainer = ({ children }: Props) => <div className={styles['box-container']}>{children}</div>;
