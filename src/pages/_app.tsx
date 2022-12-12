import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Background from '../components/Background/Background'
import Navigation from '../components/Navigation/Navigation'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ChakraProvider>
				<Background />
				<Navigation />
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	)
}

export default MyApp
