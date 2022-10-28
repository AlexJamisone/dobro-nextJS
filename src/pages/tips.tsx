import Image from 'next/future/image'
import { motion } from 'framer-motion'
import styles from '../styles/tips.module.scss'
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
		<div className={styles.container}>
			<Head>
				<title>Чаевые для Бариста</title>
			
			</Head>
			{barista.map((person, index) => {
				const { name, link, avatar } = person
				return (
					<motion.a
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ type: 'spring' }}
						href={link}
						target="_blank"
						rel="noreferrer"
						key={index}
						className={styles.link}
					>
						<Image
                            className={styles.avatar}
                            width={250}
                            height={260}
							src={avatar}
							alt={`${name}`}
						/>
						<h1 className={styles.name}>{name}</h1>
					</motion.a>
				)
			})}
		</div>
	)
}

export default TipsCard
