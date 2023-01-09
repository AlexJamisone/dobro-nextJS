import { FC } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
		>
			<Image
				src={img}
				width={91}
				height={91}
				alt={name}
				loading="lazy"
				unoptimized={true}
			/>
			<p>{name}</p>
			<p>{price}</p>
		</motion.div>
	)
}

export default Card
