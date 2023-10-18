import { Center, Link, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Content from '../components/MainContent/Content'
const Home = () => {
	return (
		<Stack gap={[5, '80px']}>
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
			<Center as="footer" flexDirection="column" gap={5} boxShadow="">
				<Text>Наши кофейни</Text>
				<Stack
					border={'1px solid'}
					p={[3, 5]}
					mx={5}
					mb={3}
					rounded="2xl"
				>
					<Text>г. Севастополь, пл. Захарова, 5, павильон 8</Text>
					<Text>г. Саратов, ул. Чехова, 4</Text>
					<Stack justifyContent="center" direction="row">
						<Link
							_hover={{ textDecoration: 'none' }}
							href="tel:+79788965258"
						>
							+79788965258
						</Link>
						<span> - Управляющий</span>
					</Stack>
				</Stack>
			</Center>
		</Stack>
	)
}
export default Home