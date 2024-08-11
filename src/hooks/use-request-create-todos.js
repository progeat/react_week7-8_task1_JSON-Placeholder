import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export const useRequestCreateTodo = () => {
	const [isCreatingFlag, setIsCreatingFlag] = useState(false);

	const requestCreateTodo = (todoTitle) => {
		setIsCreatingFlag(true);

		const todosDbRef = ref(db, 'todos');

		push(todosDbRef, {
			title: todoTitle,
			completed: false,
		})
			.then((response) => {
				console.log('A new task has been added', response);
			})
			.finally(() => setIsCreatingFlag(false));
	};

	return {
		requestCreateTodo,
		isCreatingFlag,
	};
};
