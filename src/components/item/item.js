import { useRequestDeleteTodos, useRequestUpdateTodos } from '../../hooks';
import { URL_TODOS } from '../../constants';
import styles from './item.module.css';

export const Item = ({ id, title, completed, refreshTodos }) => {
	const { isDeletingFlag, onDelete } = useRequestDeleteTodos(URL_TODOS, refreshTodos);
	const { isUpdatingFlag, onCompleted } = useRequestUpdateTodos(
		URL_TODOS,
		refreshTodos,
	);

	return (
		<li className={styles.item + ' ' + (completed && styles['item-completed'])}>
			<span>{title}</span>
			<div className={styles['item_button-wrapp']}>
				<button
					className={styles['item_button-complete']}
					onClick={() => onCompleted(id, title, (completed = !completed))}
					disabled={isUpdatingFlag}
				>
					complete
				</button>
				<button
					className={styles['item_button-delete']}
					onClick={() => onDelete(id)}
					disabled={isDeletingFlag}
				>
					delete
				</button>
			</div>
		</li>
	);
};
