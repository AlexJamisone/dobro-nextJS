import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Background from '../components/Background/Background'
import Navigation from '../components/Navigation/Navigation'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Background />
			<Navigation/>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
