import { useEffect, useState } from 'react';
import config from '../config.json';

const todosEndPoint = config.baseURL + 'todos/';

export const useRequestGetTodos = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		setIsLoading(true);

		fetch(todosEndPoint)
			.then((responseData) => {
				if (!responseData.ok) {
					throw Error('could not fetch the data for that resourse');
				}

				return responseData.json();
			})
			.then((todosData) => setTodos(todosData))
			.catch((error) => {
				console.error(error);
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return {
		todos,
		isLoading,
		error,
	};
};
