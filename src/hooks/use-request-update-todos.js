import { useState } from 'react';

export const useRequestUpdateTodos = (URL_END_POINT, refreshTodos) => {
	const [isUpdatingFlag, setIsUpdatingFlag] = useState(false);

	const onCompleted = (id, title, completed) => {
		setIsUpdatingFlag(true);

		fetch(`${URL_END_POINT}/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ title, completed }),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('The task has been updated', response);
				refreshTodos();
			})
			.finally(() => setIsUpdatingFlag(false));
	};

	return {
		isUpdatingFlag,
		onCompleted,
	};
};
