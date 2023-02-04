import Link from 'next/link'
import { motion } from 'framer-motion'
import Logo from '../Logo/Logo'
import {
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	IconButton,
	useDisclosure,
	useColorMode,
	Text,
	DrawerBody,
	Box,
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { TfiLightBulb } from 'react-icons/tfi'
import { MdNightlight } from 'react-icons/md'
import { useAuth } from '../../../context/AuthContext'

const BurgerMenu = () => {
	const { user, logout } = useAuth()
	const { isOpen, onClose, onOpen } = useDisclosure()
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<>
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
			<IconButton
				as={motion.button}
				initial={{ x: 150, rotate: '180deg', opacity: 0 }}
				animate={{ x: 0, rotate: '0deg', opacity: 1, type: 'spring' }}
				transitionDuration={'1.5s'}
				onClick={onOpen}
				aria-label="burger"
				icon={<GiHamburgerMenu color="gray" />}
			/>
			<Drawer
				isOpen={isOpen}
				onClose={onClose}
				placement="right"
				size={['xs', null, null, 'xs']}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader display="flex" gap={10} alignItems="center">
						<Text>Меню</Text>
						<IconButton
							onClick={toggleColorMode}
							aria-label="change color"
							icon={
								colorMode === 'dark' ? (
									<TfiLightBulb />
								) : (
									<MdNightlight />
								)
							}
						/>
					</DrawerHeader>
					<DrawerBody as="nav" gap={3}>
						<Box
							display="flex"
							flexDirection="column"
							gap={5}
							onClick={onClose}
						>
							<Link href="/">Кофе</Link>
							<Link href="/tips">Чаевые</Link>
							<Link href="/yandex">Яндекс.Отзывы</Link>
							{user ? (
								<>
									<Link href="/profile">
										<Box as="a">Профиль</Box>
									</Link>
									<Link href="/signin">
										<Box
											as="a"
											cursor="pointer"
											onClick={() => logout()}
										>
											Выход
										</Box>
									</Link>
								</>
							) : (
								<Link href="/signin">
									<Box as="a" cursor="pointer">
										Вход
									</Box>
								</Link>
							)}
						</Box>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default BurgerMenu
