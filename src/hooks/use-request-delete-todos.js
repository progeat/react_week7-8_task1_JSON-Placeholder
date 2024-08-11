import { useState } from 'react';

export const useRequestDeleteTodos = (URL_END_POINT, refreshTodos) => {
	const [isDeletingFlag, setIsDeleting] = useState(false);

	const onDelete = (id) => {
		setIsDeleting(true);

		fetch(`${URL_END_POINT}/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('The task has been deleted', response);
				refreshTodos();
			})
			.finally(() => setIsDeleting(false));
	};

	return {
		isDeletingFlag,
		onDelete,
	};
};
