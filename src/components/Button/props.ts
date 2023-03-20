export type Props = {
	type?: 'primary' | 'secondary' | 'more' | 'small';
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
};
