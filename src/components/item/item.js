import styles from './item.module.css';

export const Item = ({ completed, children }) => {
	return (
		<li className={styles.item + ' ' + (completed && styles['item-completed'])}>
			{children}
		</li>
	);
};
