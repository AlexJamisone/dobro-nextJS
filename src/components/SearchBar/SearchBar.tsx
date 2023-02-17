import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { motion } from 'framer-motion'

interface SearhBarProps {
	onChangeHandler: React.ChangeEventHandler<HTMLInputElement>
	failure: boolean
}

const SearchBar = ({ onChangeHandler, failure }: SearhBarProps) => {
	return (
		<>
			<InputGroup
				w=""
				my={5}
				as={motion.div}
				initial={{ y: 100, filter: 'blur(5px)', opacity: 0 }}
				animate={{ y: 0, filter: 'blur(0)', opacity: 1 }}
				transitionDuration="1.5s"
			>
				<InputLeftElement pointerEvents="none">
					<BsSearch />
				</InputLeftElement>
				<Input
					focusBorderColor={failure ? 'red.400' : 'green.300'}
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
