import { useState } from 'react';

export const useRequestCreateTodo = (URL_END_POINT, refreshTodos) => {
	const [isCreatingFlag, setIsCreatingFlag] = useState(false);

	const requestCreateTodo = (todoTitle) => {
		setIsCreatingFlag(true);

		fetch(URL_END_POINT, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ title: todoTitle, completed: false }),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('A new task has been added', response);
				refreshTodos();
			})
			.finally(() => setIsCreatingFlag(false));
	};

	return {
		requestCreateTodo,
		isCreatingFlag,
	};
};
