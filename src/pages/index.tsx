import { Center } from '@chakra-ui/react'
import Head from 'next/head'
import Content from '../components/MainContent/Content'
const Home = () => {
	return (
		<>
			<Head>
				<title>Добро Кофе</title>
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
		</>
	)
}
export default Home
