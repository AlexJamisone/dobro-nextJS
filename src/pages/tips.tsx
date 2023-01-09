import Image from 'next/future/image'
import { motion } from 'framer-motion'
import Head from 'next/head'

const TipsCard = () => {
	const barista = [
		{
			name: 'Саша',
			link: process.env.SASH_TINKOFF,
			avatar: '/static/avatar/sasha.png',
		},
		{
			name: 'Оля',
			link: process.env.OLI_TINKOFF,
			avatar: '/static/avatar/oli.png',
		},
		{
			name: 'Лёша',
			link: process.env.ALEX_TINKOFF,
			avatar: '/static/avatar/alex.png',
		},
	]
	return (
		<div>
			<Head>
				<title>Чаевые для Бариста</title>
			</Head>
			{barista.map(({ name, avatar, link }, index) => {
				return (
					<motion.a
						hrefLang={link}
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ type: 'spring' }}
						href={link}
						target="_blank"
						rel="noreferrer"
						key={index}
					>
						<Image
							width={250}
							height={260}
							src={avatar}
							alt={`${name}`}
						/>
						<h1>{name}</h1>
					</motion.a>
				)
			})}
		</div>
	)
}

export default TipsCard
