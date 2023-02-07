import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

interface SearhBarProps {
	onChangeHandler: React.ChangeEventHandler<HTMLInputElement>
	failure: boolean
}

const SearchBar = ({ onChangeHandler, failure }: SearhBarProps) => {
	return (
		<>
			<InputGroup w="" my={5}>
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
