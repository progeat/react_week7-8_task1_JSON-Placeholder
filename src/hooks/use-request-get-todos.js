import { useEffect, useState } from 'react';

export const useRequestGetTodos = (URL_END_POINT, refreshTodosFlag) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch(URL_END_POINT)
			.then((responseData) => responseData.json())
			.then((todosData) => setTodos(todosData))
			.finally(() => setIsLoading(false));
	}, [URL_END_POINT, refreshTodosFlag]);

	return {
		todos,
		isLoading,
	};
};
