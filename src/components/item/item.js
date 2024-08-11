import { useRequestDeleteTodos, useRequestUpdateTodos } from '../../hooks';
import styles from './item.module.css';

export const Item = ({ id, title, completed }) => {
	const { isDeletingFlag, onDelete } = useRequestDeleteTodos();
	const { isUpdatingFlag, onCompleted } = useRequestUpdateTodos();

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
