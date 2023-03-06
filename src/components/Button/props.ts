export type props = {
	onClick?: () => void;
	type?: 'primary' | 'secondary' | 'more' | 'small';
	children?: React.ReactNode;
	className?: string;
};
