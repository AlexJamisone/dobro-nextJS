import { Box, Center } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Head from 'next/head'

const Yandex = () => {
	return (
		<>
			<Head>
				<title>Яндекс.Отзывы</title>
				<meta
					name="отзывы"
					content="яндекс отзывы гости посетители захарова северная севастополь кофейня доброкофе"
				/>
			</Head>
			<Center>
				<Box
					justifyContent="center"
					boxShadow="2xl"
					rounded="2xl"
					as={motion.iframe}
					initial={{ y: 200, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					style={{ zIndex: 1010 }}
					h={['500px', '750px']}
					w={['300px', '750px']}
					title="Yandex"
					src="https://yandex.ru/maps-reviews-widget/113115524349?comments"
					mt={5}
				></Box>
			</Center>
		</>
	)
}

export default Yandex
