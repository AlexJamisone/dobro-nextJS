import { Box, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export type CardProps = {
	data: {
		img: string
		name: string
		price: string
	}
}

const Card = ({ data: { img, name, price } }: CardProps) => {
	return (
		<Box
			as={motion.div}
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			display="flex"
			alignItems="center"
			justifyContent='space-between'
			px={[5,5]}
			mx={[5]}
			border="1px solid black"
			_dark={{
				border: '1px solid white',
			}}
			rounded='3xl'
			cursor='pointer'
			fontSize={[10, 16]}
			lineHeight={1}
		>
			<Image
				src={img}
				width={91}
				height={91}
				alt={name}
				loading="lazy"
				unoptimized={true}
			/>
			<Text>{name}</Text>
			<Text>{price}</Text>
		</Box>
	)
}

export default Card
