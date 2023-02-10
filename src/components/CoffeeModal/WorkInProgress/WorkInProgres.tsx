import { Center, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { dbCofeeDataApi } from '../../MainContent/Content'

interface WorkInProgresProps {
	data: dbCofeeDataApi
}

const WorkInProgres = ({ data: { name, img } }: WorkInProgresProps) => {
	return (
		<Center position="relative">
			<Text
				position="absolute"
				top="50%"
				zIndex={10}
				p={3}
				rounded={50}
				backgroundColor="gray.900"
			>
				Работаем над описанием
			</Text>
			<Image alt={name} src={img} filter="blur(5px)" w={[200, 250]} />
		</Center>
	)
}

export default WorkInProgres
