import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Auth from '../components/Auth/Auth'
import { useAuth } from '../context/AuthContext'

const SignIn = () => {
	const { user } = useAuth()
	const router = useRouter()
	useEffect(() => {
		if (user) {
			router.push('/profile')
		} else if (user === null) {
			return
		}
	}, [])
	return (
		<>
			<Head>
				<title>Вход</title>
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
			<Auth />
		</>
	)
}

export default SignIn
