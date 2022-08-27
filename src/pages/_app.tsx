import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Background from '../components/Background/Background'
import Navigation from '../components/Navigation/Navigation'
import styles from '../styles/index.module.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className={styles.container}>
			<Background />
			<Navigation/>
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
