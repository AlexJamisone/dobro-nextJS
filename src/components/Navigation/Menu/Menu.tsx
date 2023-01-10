import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from '../Logo/Logo'
import { useAuth } from '../../../context/AuthContext'

const Menu = () => {
	const { user, logout } = useAuth()
	return (
		<Box
			as={motion.nav}
			display="flex"
			flex="2 1"
			justifyContent="center"
			alignItems="center"
			gap={20}
			initial={false}
		>
			<Link href="/">Coffee</Link>
			<Link href="/">
				<motion.div
					initial={{ opacity: 0, y: '100%' }}
					animate={{ opacity: 1, y: '0' }}
					transition={{ delay: 0.5 }}
					style={{
						cursor: 'pointer',
					}}
				>
					<Logo />
				</motion.div>
			</Link>
			<Link href="yandex">Yandex</Link>
			{user ? (
				<Link href="/signin">
					<Box
						as="a"
						mr={10}
						cursor="pointer"
						onClick={() => logout()}
					>
						Sign Out
					</Box>
				</Link>
			) : (
				<Link href="/signin">
					<Box as="a" mr={10} cursor="pointer">
						Sign In
					</Box>
				</Link>
			)}
		</Box>
	)
}

export default Menu
