import { useEffect, useState } from 'react';

export const useRequestGetTodos = (URL_END_POINT) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch(URL_END_POINT)
			.then((responseData) => responseData.json())
			.then((todosData) => setTodos(todosData))
			.finally(() => setIsLoading(false));
	}, [URL_END_POINT]);

	return {
		todos,
		isLoading,
	};
};
