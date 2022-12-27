import '../styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation/Navigation'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContextProvider } from '../context/AuthContext'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = React.useState(() => new QueryClient())
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>
					<AuthContextProvider>
						<ChakraProvider>
							<Navigation />
							<Component {...pageProps} />
						</ChakraProvider>
					</AuthContextProvider>
				</Hydrate>
			</QueryClientProvider>
		</>
	)
}

export default MyApp
