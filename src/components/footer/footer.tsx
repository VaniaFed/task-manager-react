import React from 'react';
import classNames from 'classnames/bind';

import styles from './footer.module.scss';
import { Props } from './props';

export const Footer = ({ className }: Props) => {
	const cx = classNames.bind(styles);
	const resultClass = cx('footer', className);
	return (
		<footer className={resultClass}>
			<div className="footer__socials container container_size_1168">
				<p className="footer__paragraph paragraph">Наши социальные сети</p>
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
		</footer>
	);
};
