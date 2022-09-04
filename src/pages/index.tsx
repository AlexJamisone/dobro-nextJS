import type { NextPage } from 'next'
import Head from 'next/head'
import LinkToApp from '../components/LinkToApp/LinkToApp'
import Content from '../components/MainContent/Content'
import styles from '../styles/index.module.scss'
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

			<main>
				<Content />
			</main>

			<footer className={styles.footer}>
				<LinkToApp />
			</footer>
		</>
	)
}

export default Home
