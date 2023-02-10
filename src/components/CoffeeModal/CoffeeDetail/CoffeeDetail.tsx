import { Center, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { dbCofeeDataApi } from '../../MainContent/Content'

interface CoffeeDetailProps {
	data: dbCofeeDataApi
}

const CoffeeDetail = ({
	data: { description, img, name, price },
}: CoffeeDetailProps) => {
	return (
		<Center>
			<Image alt={name} src={img} w={[150, 250]} />
			<Text>{description}</Text>
			<Text>{price}</Text>
		</Center>
	)
}

export default CoffeeDetail
