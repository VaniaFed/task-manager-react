import React, { useState } from 'react';

import { Button } from 'components/Button';
import { Counter } from 'components/Counter';
import { Heading } from 'components/Heading';

export default function App() {
	const [counter, setCounter] = useState(0);

	const countAdd = () => setCounter(counter + 1);
	const countReduce = () => setCounter(counter - 1);
	return (
		<div className="app">
			<Button onClick={countReduce} type="small">
				-
			</Button>
			<Button onClick={countAdd} type="small">
				+
			</Button>
			<Heading size="3">
				Value:
				<Counter value={counter} />
			</Heading>
		</div>
	);
}
