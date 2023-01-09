import React from 'react'
import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation/Navigation'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContextProvider } from '../context/AuthContext'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { theme } from '../chakra/them'
import { Box } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = React.useState(() => new QueryClient())
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>
					<AuthContextProvider>
						<ChakraProvider theme={theme}>
							<Box overflow="hidden" width="100vw" height="100vh">
								<Navigation />
								<Component {...pageProps} />
							</Box>
						</ChakraProvider>
					</AuthContextProvider>
				</Hydrate>
			</QueryClientProvider>
		</>
	)
}

export default MyApp
