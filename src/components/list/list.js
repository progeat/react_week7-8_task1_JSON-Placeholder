import { Item, Loader } from '../../components';
import { useRequestGetTodos } from '../../hooks';
import styles from './list.module.css';

export const List = () => {
	const { todos, isLoading, error } = useRequestGetTodos();

	if (isLoading) return <Loader />;

	return (
		<>
			{error ? (
				<div className={styles.error}>{error}</div>
			) : (
				<ul className={styles.list}>
					{todos.map(({ id, title, completed }) => (
						<Item key={id} completed={completed}>
							{title}
						</Item>
					))}
				</ul>
			)}
		</>
	);
};
