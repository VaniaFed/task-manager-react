import { Button } from 'components/Button';
import React from 'react';

const logging = () => console.log('Hello, warlord');

export default function App(): any {
	return (
		<Button onClick={logging} type="small">
			Hello, button!
		</Button>
	);
}
