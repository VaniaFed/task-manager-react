import { TodoItem } from 'components/Todo-item';
import React from 'react';
import { TaskType } from 'types/task-type';

export default function App() {
	const task: TaskType = {
		id: 'klfjlsdkfjsd',
		text: 'Task 1',
		status: 'Active',
	};

	return (
		<div className="app">
			<TodoItem task={task} />
		</div>
	);
}
