import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation/Navigation'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContextProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<AuthContextProvider>
				<ChakraProvider>
					<Navigation />
					<Component {...pageProps} />
				</ChakraProvider>
			</AuthContextProvider>
		</>
	)
}

export default MyApp
