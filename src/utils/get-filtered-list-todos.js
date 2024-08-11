export const getFilteredListTodos = (todos, isSortFlag, debouncedValue) => {
	let filteredListTodos = [];

	if (isSortFlag) {
		filteredListTodos = Object.entries(todos).sort((a, b) =>
			a[1].title > b[1].title ? 1 : -1,
		);
	} else {
		filteredListTodos = Object.entries(todos);
	}

	if (debouncedValue)
		filteredListTodos = filteredListTodos.filter((todo) =>
			todo[1].title.toLowerCase().includes(debouncedValue.toLowerCase()),
		);

	return filteredListTodos;
};
