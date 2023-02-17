import { Box, Text, useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { dbCofeeDataApi } from '../../../types/types'
import CoffeeModal from '../../CoffeeModal/CoffeeModal'

interface CardProps {
	data: dbCofeeDataApi
}

const Card = ({ data }: CardProps) => {
	const { isOpen, onClose, onToggle } = useDisclosure()
	const { img, name, price } = data
	return (
		<>
			<CoffeeModal isOpen={isOpen} onClose={onClose} data={data} />
			<Box
				onClick={onToggle}
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
		</>
	)
}

export default Card
