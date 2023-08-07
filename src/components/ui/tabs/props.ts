import type { TabType } from 'types';

export interface Props {
	tabs: TabType[];
	value?: string;
	className?: string;
	onChange?: (label: string) => void;
}
