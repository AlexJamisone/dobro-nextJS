import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Background from '../components/Background/Background'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<Background />
		</>
	)
}

export default MyApp
