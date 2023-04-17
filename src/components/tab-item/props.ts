import { FilterType } from 'types/filter-type';

export type Props = {
	text: FilterType;
	counter?: number;
	className?: string;
	counterClassName?: string;
	onClick?: (arg: FilterType) => void;
};
