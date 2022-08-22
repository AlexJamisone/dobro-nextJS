import { FC } from 'react'
import { motion } from 'framer-motion'
import styles from './Card.module.scss'

export type CardProps = {
	data: {
		img: string
		name: string
		price: string
	}
}

const Card: FC<CardProps> = ({ data: { img, name, price } }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			className={styles.container}
		>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src={img} alt={name} className={styles.img} />
			<p className={styles.name}>{name}</p>
			<p className={styles.price}>{price}</p>
		</motion.div>
	)
}

export default Card
