export type Props = {
	value?: string;
	placeholder?: string;
	textarea?: boolean;
	className?: any;
	onEnter?: (value: string) => void;
	onBlur?: (value: string) => void;
};
