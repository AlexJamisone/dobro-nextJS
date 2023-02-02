import { Center } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import Head from 'next/head'
import Content from '../components/MainContent/Content'
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Dobro Coffee</title>
				<meta
					name="description"
					content="Кофейня Добро Кофе Севастополь"
				/>
				<meta
					name="keywords"
					content="добро,кофейня,кофе,зерно,северная сторона,кофейни на северной,эспрессо,купить кофе,кофе домой,чашка кофе,капучино"
				/>
				<link rel="icon" href="favicon.png" />
			</Head>

			<Center as="main" flexDirection="column">
				<Content />
			</Center>

			<footer></footer>
		</>
	)
}

export default Home
