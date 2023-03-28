export type TypeLink = {
	text: string;
	href: string;
	isActive?: boolean;
};

export type Props = {
	links: TypeLink[];
	className?: string;
};
