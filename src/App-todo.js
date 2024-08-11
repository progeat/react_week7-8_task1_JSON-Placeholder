import { HeaderApp, BodyApp } from './components';
import styles from './app-todo.module.css';

export const TodoApp = () => {
	return (
		<div className={styles.app}>
			<HeaderApp>TODO List App</HeaderApp>
			<BodyApp />
		</div>
	);
};
