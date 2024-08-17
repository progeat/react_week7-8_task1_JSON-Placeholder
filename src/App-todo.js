import { HeaderApp, BodyApp, Loader } from './components';
import { useRequestGetTodos } from './hooks';
import styles from './app-todo.module.css';

export const TodoApp = () => {
	const { todos, setTodos, isLoading, errorGetting } = useRequestGetTodos();

	return (
		<div className={styles.app}>
			<HeaderApp setTodos={setTodos}>TODO List App</HeaderApp>
			{isLoading ? (
				<Loader />
			) : (
				<BodyApp todos={todos} setTodos={setTodos} errorGetting={errorGetting} />
			)}
		</div>
	);
};
