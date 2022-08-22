import React from 'react'
import { motion } from 'framer-motion'

import styles from './SearchBar.module.scss'


const SearchBar = ({onChengeHendler}: any) => {
	return (
		<div className={styles.search}>
			<input
				id="search"
				type="search"
				className={styles.searchInput}
				placeholder=" "
				onChange={onChengeHendler}
				autoComplete="off"
			/>
			<motion.label
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				htmlFor="search"
				className={styles.searchInputLabel}
			>
				Поиск кофе
			</motion.label>
		</div>
	)
}

export default SearchBar