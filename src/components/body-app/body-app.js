import { useState } from 'react';
import { List, Loader } from '../index';
import { useDebonce, useRequestGetTodos } from '../../hooks';
import { getFilteredListTodos } from '../../utils';
import styles from './body-app.module.css';

export const BodyApp = () => {
	const [searchValue, setSearchValue] = useState('');
	const [isSortFlag, setIsSortFlag] = useState(false);
	const { todos, isLoading } = useRequestGetTodos();
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
					<List todos={newListTodos} />
				</>
			)}
		</>
	);
};
