import styles from './header.module.css';

export const Header = ({ children }) => {
	return (
		<div className={styles.header}>
			<h1 className={styles.title}>{children}</h1>
		</div>
	);
};
