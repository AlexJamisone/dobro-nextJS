import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import UserContent from '../components/UserContent/UserContent'
import { useAuth } from '../context/AuthContext'

const Profile = () => {
	const router = useRouter()
	const { user } = useAuth()
	useEffect(() => {
		if (user) {
			return
		} else if (user === null) {
			router.push('/signin')
		}
	}, [user])
	if (!user) {
		return null
	}
	console.log(user)
	return (
		<>
			<Head>
				<title>Профиль</title>
				<meta
					name="Профиль"
					content="Кофейня Добро Кофе Севастополь личный кабинет бонусы акции чеки статистика"
				/>
				<meta
					name="keywords"
					content="добро,кофейня,кофе,зерно,северная сторона,кофейни на северной,эспрессо,купить кофе,кофе домой,чашка кофе,капучино, акции, бонусы"
				/>
				<link rel="icon" href="favicon.png" />
			</Head>
			<Box>
				<UserContent />
			</Box>
		</>
	)
}

export default Profile
