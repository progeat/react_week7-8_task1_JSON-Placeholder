import { Item } from '../index';
import styles from './list.module.css';

export const List = ({ todos, refreshTodos }) => {
	return (
		<ul className={styles.list}>
			{todos.map(({ id, title, completed }) => (
				<Item
					key={id}
					id={id}
					title={title}
					completed={completed}
					refreshTodos={refreshTodos}
				/>
			))}
		</ul>
	);
};
