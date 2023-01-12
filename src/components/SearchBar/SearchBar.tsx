import React from 'react'
import { motion } from 'framer-motion'
import { InputLeftElement, Input, InputGroup } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

interface SearhBarProps {
	onChangeHandler: React.ChangeEventHandler<HTMLInputElement>
}

const SearchBar = ({ onChangeHandler }: SearhBarProps) => {
	return (
		<>
			<InputGroup w="" my={5}>
				<InputLeftElement pointerEvents="none">
					<BsSearch />
				</InputLeftElement>
				<Input
					placeholder="Найди свой кофе"
					_dark={{ _placeholder: { color: 'white', opacity: 0.9 } }}
					fontSize={[12, 14]}
					onChange={onChangeHandler}
				/>
			</InputGroup>
		</>
	)
}

export default SearchBar
