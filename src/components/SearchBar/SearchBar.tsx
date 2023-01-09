import React from 'react'
import { motion } from 'framer-motion'

const SearchBar = ({ onChengeHendler }: any) => {
	return (
		<div>
			<input
				id="search"
				type="search"
				placeholder=" "
				onChange={onChengeHendler}
				autoComplete="off"
			/>
			<motion.label
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				htmlFor="search"
			>
				Поиск кофе
			</motion.label>
		</div>
	)
}

export default SearchBar
