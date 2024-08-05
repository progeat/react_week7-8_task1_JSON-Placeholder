import { Header, List } from './components';
import styles from './app-todo.module.css';

export const TodoApp = () => {
	return (
		<div className={styles.app}>
			<Header>TODO List App</Header>
			<List />
		</div>
	);
};
