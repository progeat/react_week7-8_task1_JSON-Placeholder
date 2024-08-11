import { List, Loader } from '../index';
import { useDebonce, useRequestGetTodos } from '../../hooks';
import { URL_TODOS } from '../../constants';
import styles from './body-app.module.css';
import { useState } from 'react';
import { getFilteredListTodos } from '../../utils';

export const BodyApp = ({ refreshTodosFlag, refreshTodos }) => {
	const [searchValue, setSearchValue] = useState('');
	const [isSortFlag, setIsSortFlag] = useState(false);
	const { todos, isLoading } = useRequestGetTodos(URL_TODOS, refreshTodosFlag);
	const { debouncedValue } = useDebonce(searchValue, 300);

	const newListTodos = getFilteredListTodos(todos, isSortFlag, debouncedValue);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
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
						></input>
					</div>
					<List todos={newListTodos} refreshTodos={refreshTodos} />
				</>
			)}
		</>
	);
};
