export type TypeLink = {
	text: string;
	href: string;
	isActive?: boolean;
	isIcon?: boolean;
	iconType?: 'inst' | 'vk' | 'fb' | 'youtube';
};

export type Props = {
	links: TypeLink[];
	className?: string;
	color?: 'white';
};
