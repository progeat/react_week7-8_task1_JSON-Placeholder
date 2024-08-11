import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const useRequestUpdateTodos = () => {
	const [isUpdatingFlag, setIsUpdatingFlag] = useState(false);

	const onCompleted = (id, title, completed) => {
		setIsUpdatingFlag(true);

		const todosDbRef = ref(db, `todos/${id}`);

		set(todosDbRef, {
			title,
			completed,
		})
			.then((response) => {
				console.log('The task has been updated', response);
			})
			.finally(() => setIsUpdatingFlag(false));
	};

	return {
		isUpdatingFlag,
		onCompleted,
	};
};
