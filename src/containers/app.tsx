import { BoxContainer } from 'components/box-container';
import { TodoSmart } from 'containers/todo-smart';
import React from 'react';

export default function App() {
	return (
		<div className="app">
			<BoxContainer>
				<TodoSmart />
			</BoxContainer>
		</div>
	);
}
