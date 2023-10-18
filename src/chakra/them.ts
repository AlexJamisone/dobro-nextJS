import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
const config: ThemeConfig = {
	initialColorMode: 'system',
	useSystemColorMode: true,
	disableTransitionOnChange: false,
}
const breakpoints = {
	sm: '30em',
	md: '48em',
	lg: '62em',
	xl: '80em',
	'2xl': '96em',
}

export const theme = extendTheme({ config, breakpoints })
