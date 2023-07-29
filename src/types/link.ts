import type { Social } from 'types';

export interface Link {
	text: string;
	href: string;
	isActive?: boolean;
	iconType?: Social;
}
