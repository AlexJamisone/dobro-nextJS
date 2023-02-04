import { Avatar, Box, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Head from 'next/head'

const TipsCard = () => {
	const barista = [
		{
			name: 'Саша',
			link: 'https://www.tinkoff.ru/cf/142W441ULA3',
			avatar: '/static/avatar/sasha.png',
		},
		{
			name: 'Оля',
			link: 'https://www.tinkoff.ru/cf/7dzSVcZ5gpW',
			avatar: '/static/avatar/oli.png',
		},
		{
			name: 'Лёша',
			link: 'https://www.tinkoff.ru/cf/5Y94azSjVDD',
			avatar: '/static/avatar/alex.png',
		},
	]
	return (
		<Box
			display="flex"
			flexWrap="wrap"
			justifyContent="center"
			textAlign="center"
			gap={10}
			mt={20}
		>
			<Head>
				<title>Чаевые для бариста</title>
				<meta
					name="Чай"
					content="Кофейня Добро Кофе Севастополь вознаграждение чаевые онлайн"
				/>
				<meta
					name="keywords"
					content="добро,кофейня,кофе,зерно,северная сторона,кофейни на северной,эспрессо,купить кофе,кофе домой,чашка кофе,капучино, акции, бонусы, чаевые"
				/>
				<link rel="icon" href="favicon.png" />
			</Head>
			{barista.map(({ name, avatar, link }, index) => {
				return (
					<Box
						as={motion.a}
						hrefLang={link}
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ type: 'spring' }}
						href={link}
						target="_blank"
						rel="noreferrer"
						key={index}
						cursor="pointer"
						mx={3}
					>
						<Avatar size={['xl', '2xl']} src={avatar} />
						<Text mt={1}>{name}</Text>
					</Box>
				)
			})}
		</Box>
	)
}

export default TipsCard
