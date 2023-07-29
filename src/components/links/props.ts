export interface TypeLink {
	text: string;
	href: string;
	isActive?: boolean;
	isIcon?: boolean;
	iconType?: 'inst' | 'vk' | 'fb' | 'youtube';
}

export interface Props {
	links: TypeLink[];
	className?: string;
	color?: 'white';
}
