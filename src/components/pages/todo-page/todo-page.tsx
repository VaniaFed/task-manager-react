import React from 'react';

import { Todo } from 'components/ui/todo';
import { BoxContainer } from 'components/layouts/box-container';

import type { FC } from 'react';

export const TodoPage: FC<unknown> = () => {
	return (
		<BoxContainer>
			<Todo />
		</BoxContainer>
	);
};
