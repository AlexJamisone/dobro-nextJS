import type { NextPage } from 'next'
import Head from 'next/head'
import Content from '../components/MainContent/Content'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Dobro Coffee</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="favicon.ico" />
			</Head>

			<main>
				<Content/>
			</main>

			<footer></footer>
		</div>
	)
}

export default Home
