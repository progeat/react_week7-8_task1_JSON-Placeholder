import { useState } from 'react';
import { HeaderApp, BodyApp } from './components';
import styles from './app-todo.module.css';

export const TodoApp = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

	return (
		<div className={styles.app}>
			<HeaderApp refreshTodos={refreshTodos}>TODO List App</HeaderApp>
			<BodyApp refreshTodosFlag={refreshTodosFlag} refreshTodos={refreshTodos} />
		</div>
	);
};
