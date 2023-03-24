import React from 'react';
import classNames from 'classnames/bind';

import styles from './footer.module.scss';
import { Props } from './props';
import { Paragraph } from 'components/paragraph';
import { BoxContainer } from 'components/box-container';

export const Footer = ({ className }: Props) => {
	const cx = classNames.bind(styles);
	const resultClass = cx('footer', className);
	return (
		<footer className={resultClass}>
			<BoxContainer>
				<div className="footer__socials container container_size_1168">
					<Paragraph className={cx('footer__paragraph')}>Наши социальные сети</Paragraph>
					<ul className="footer__links">
						<li>
							<a href="#" className="footer__link link link_inst" target="_blank">
								instagram
							</a>
						</li>
						<li>
							<a href="#" className="footer__link link link_fb" target="_blank">
								facebook
							</a>
						</li>
						<li>
							<a href="#" className="footer__link link link_vk" target="_blank">
								vkontakte
							</a>
						</li>
					</ul>
				</div>
			</BoxContainer>
		</footer>
	);
};
