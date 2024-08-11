import { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useRequestDeleteTodos = () => {
	const [isDeletingFlag, setIsDeleting] = useState(false);

	const onDelete = (id) => {
		setIsDeleting(true);

		const todosDbRef = ref(db, `todos/${id}`);

		remove(todosDbRef)
			.then((response) => {
				console.log('The task has been deleted', response);
			})
			.finally(() => setIsDeleting(false));
	};

	return {
		isDeletingFlag,
		onDelete,
	};
};
