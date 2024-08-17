import { useState } from 'react';
import { List } from '../index';
import { useDebonce } from '../../hooks';
import { getFilteredListTodos } from '../../utils';
import styles from './body-app.module.css';

export const BodyApp = ({ todos, setTodos, errorGetting }) => {
	const [searchValue, setSearchValue] = useState('');
	const [isSortFlag, setIsSortFlag] = useState(false);
	const { debouncedValue } = useDebonce(searchValue, 300);

	const newListTodos = getFilteredListTodos(todos, isSortFlag, debouncedValue);

	if (errorGetting) return <div className={styles.error}>{errorGetting}</div>;

	return (
		<>
			<div className={styles['list-header']}>
				<button
					className={
						styles['button-sort'] +
						' ' +
						(isSortFlag && styles['button-sort--active'])
					}
					onClick={() => setIsSortFlag(!isSortFlag)}
				>
					Sort
				</button>
				<span className={styles.span}>|</span>
				<input
					type="text"
					value={searchValue}
					className={styles['input-search']}
					placeholder="Search..."
					onChange={({ target }) => setSearchValue(target.value)}
				/>
			</div>
			<List todos={newListTodos} setTodos={setTodos} />
		</>
	);
};
