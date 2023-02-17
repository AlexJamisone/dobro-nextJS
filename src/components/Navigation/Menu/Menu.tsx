import { Box, Center } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useAuth } from '../../../context/AuthContext'
import Logo from '../Logo/Logo'

const Menu = () => {
	const { user, logout } = useAuth()
	return (
		<Box as="nav" w="100%" display="flex" alignItems="center">
			<Center flex={10} gap={20}>
				<Link href="/">Кофе</Link>
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
				<Link href="yandex">Яндекс.Отзывы</Link>
			</Center>
			{user ? (
				<Center gap={10} mx={10} flex={1}>
					<Link href="/profile">
						<Box as="a" cursor="pointer">
							Профиль
						</Box>
					</Link>
					<Link href="/signin">
						<Box as="a" cursor="pointer" onClick={() => logout()}>
							Выйти
						</Box>
					</Link>
				</Center>
			) : (
				<Link href="/signin">
					<Box as="a" mr={10} cursor="pointer">
						Войти
					</Box>
				</Link>
			)}
		</Box>
	)
}

export default Menu
