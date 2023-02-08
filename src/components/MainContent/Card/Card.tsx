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
			className="scroll"
			as={motion.div}
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			p={2}
			border="1px solid black"
			_dark={{
				border: '1px solid white',
			}}
			rounded="3xl"
			cursor="pointer"
			fontSize={[10, 16]}
			lineHeight={1}
			w={['100%']}
			gap={3}
		>
			<Image
				src={img}
				width={91}
				height={91}
				alt={name}
				loading="lazy"
				unoptimized={true}
			/>
			<Text
				fontSize={[12, 14]}
				lineHeight={1.5}
				textAlign="left"
				w={'150px'}
			>
				{name}
			</Text>
			<Text w={['50px', '75px']}>{price}</Text>
		</Box>
	)
}

export default Card
