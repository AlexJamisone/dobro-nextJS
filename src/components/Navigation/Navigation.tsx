import { Box, useMediaQuery } from '@chakra-ui/react'
import { NextPage } from 'next'
import BurgerMenu from './BurgerMenu/BurgerMenu'
import Menu from './Menu/Menu'

const Navigation: NextPage = () => {
	const [less62em] = useMediaQuery('(max-width: 62em)')
	return (
		<Box
			as="header"
			display="flex"
			justifyContent="center"
			gap={5}
			alignItems="center"
			transition="background-color 2s linear"
		>
			{less62em ? <BurgerMenu /> : <Menu />}
		</Box>
	)
}

export default Navigation
