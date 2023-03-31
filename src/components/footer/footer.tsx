import React from 'react';
import classNames from 'classnames/bind';

import { Paragraph } from 'components/paragraph';
import { BoxContainer } from 'components/box-container';
import { TypeLink } from 'components/links/props';
import { Links } from 'components/links';

import { Props } from './props';
import styles from './footer.module.scss';

export const Footer = ({ className }: Props) => {
	const cx = classNames.bind(styles);

	const links: TypeLink[] = [
		{
			text: 'instagram',
			href: '#',
			isIcon: true,
			iconType: 'inst',
		},
		{
			text: 'facebook',
			href: '#',
			isIcon: true,
			iconType: 'fb',
		},
		{
			text: 'vkontakte',
			href: '#',
			isIcon: true,
			iconType: 'vk',
		},
	];
	return (
		<footer className={cx('footer', className)}>
			<BoxContainer>
				<div className={cx('footer__socials')}>
					<Paragraph className={cx('footer__paragraph')}>Наши социальные сети</Paragraph>
					<Links links={links} className={cx('footer__links')} color="white" />
				</div>
			</BoxContainer>
		</footer>
	);
};
