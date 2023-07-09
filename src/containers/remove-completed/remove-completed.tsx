import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'components/button';
import { actions } from 'actions/';
import { selectors } from 'selectors/';

export const RemoveCompleted = () => {
	const dispatch = useDispatch();
	const removeCompleted = () => {
		dispatch(actions.removeCompletedTasks());
	};

	const completedTasks = useSelector(selectors.completedTasks);

	return (
		<>
			{completedTasks.length > 0 && (
				<Button type="small" onClick={removeCompleted}>
					Clear completed
				</Button>
			)}
		</>
	);
};
