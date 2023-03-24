import React from 'react';
import classNames from 'classnames/bind';

import styles from './header.module.scss';
import { Props } from './props';
import { BoxContainer } from 'components/box-container';
import { Link } from 'components/link';

export const Header = ({ className }: Props) => {
	const cx = classNames.bind(styles);
	return (
		<header className={cx('header', className)}>
			<BoxContainer>
				<nav className={cx('header__nav')}>
					<a href="#" target="_blank">
						<svg
							className={cx('header__logo')}
							viewBox="-8.86 0 89.724 89.724"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M38.334 0C20.011-.04 3.291 16.456.44 35.468c-3.092 20.619 10.431 40.684 30.065 45.488 5.874 1.438 8.768 1.331 8.768 1.331s.079 5.816.079 7.438c.86-.816 11.587-11.352 11.587-11.352L39.352 67.176c.096 2.796 0 7.438 0 7.438s-6.717 0-13.075-3.367C-5.025 54.674 2.397 9.036 38.647 2.976c4.518-.756 16.688 1.193 20.591 2.505C56.874 3.856 50.045.026 38.334.001zm4.932 8.456c-15.875 0-28.733 12.937-28.733 28.812C14.533 53.143 27.391 66 43.266 66 59.142 66.001 72 53.143 72 37.268S59.142 8.456 43.266 8.456zm-.156 1.957a2.799 2.799 0 0 1 2.818 2.819c0 1.572-1.246 2.897-2.818 2.897-1.573 0-2.897-1.325-2.897-2.897 0-1.572 1.324-2.819 2.897-2.819zm.078 9.474c2.846 0 5.09 2.123 5.09 4.776v10.413l9.081 8.299c1.978 1.811 1.898 4.938-.156 7.046-2.055 2.108-5.304 2.36-7.282.548l-9.943-9.082a4.641 4.641 0 0 1-.235-.235c-1.067-.876-1.722-2.166-1.722-3.601V24.663c0-2.653 2.321-4.776 5.167-4.776zm-24.662 15.58c1.572 0 2.818 1.325 2.818 2.897a2.799 2.799 0 0 1-2.818 2.819 2.799 2.799 0 0 1-2.819-2.819c0-1.572 1.246-2.897 2.819-2.897zm49.56.078a2.799 2.799 0 0 1 2.818 2.819 2.799 2.799 0 0 1-2.819 2.819 2.799 2.799 0 0 1-2.818-2.819 2.799 2.799 0 0 1 2.818-2.819zM43.58 59.033c1.572 0 2.896 1.325 2.896 2.897 0 1.573-1.324 2.819-2.896 2.819a2.799 2.799 0 0 1-2.819-2.819c0-1.572 1.246-2.897 2.819-2.897z" />
						</svg>
					</a>
					<ul className={cx('header__links')}>
						<li>
							<Link href="#" className={cx('header__link')}>
								Мои задачи
							</Link>
						</li>
						<li>
							<Link href="#" className={cx('header__link')}>
								Календарь
							</Link>
						</li>
						<li>
							<Link href="#" className={cx('header__link')}>
								Статистика
							</Link>
						</li>
					</ul>
					<span className={cx('login')}>
						<Link href="#" className={cx('header__link')}>
							Войти
						</Link>
						/
						<Link href="#" className={cx('header__link')}>
							Зарегистрироваться
						</Link>
					</span>
				</nav>
			</BoxContainer>
		</header>
	);
};
