import { TabType, FilterType } from 'types/';

export type Props = {
	items: TabType[];
	filter: FilterType;
	setFilter: (value: FilterType) => void;
	className?: string;
};
