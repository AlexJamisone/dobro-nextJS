import { FC } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
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
			<Image
				src={img}
				width={91}
				height={91}
				alt={name}
				className={styles.img}
				blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAYAAADHLIObAAAAg0lEQVR42u3QQQEAQAQAsNPoGgojhHpC8NwiLH51PtZCpEiRIhEpUqRIRIoUiUiRIkUiUqRIkYgUKRKRIkWKRKRIkSIRKVIkIkWKFIlIkSIRKVKkSESKFCkSkSJFIlKkSJGIFClSJCJFikSkSJEiESlSpEiRIkWKRKRIkSIRKVIkIu8MRWynNVqlSaIAAAAASUVORK5CYII="
				placeholder="blur"
			/>
			<p className={styles.name}>{name}</p>
			<p className={styles.price}>{price}</p>
		</motion.div>
	)
}

export default Card
