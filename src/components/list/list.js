import { Item, Loader } from '../../components';
import { useRequestGetTodos } from '../../hooks';
import { URL_TODOS } from '../../constants';
import styles from './list.module.css';

export const List = () => {
	const { todos, isLoading } = useRequestGetTodos(URL_TODOS);

	return (
		<>
			{isLoading ? (
				<Loader />
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
