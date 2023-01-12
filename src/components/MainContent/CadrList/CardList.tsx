import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import Card from '../Card/Card'

type CardListP = {
	data: []
}

const CardList: FC<CardListP> = ({ data }) => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			mx={[3, 0]}
			gap={[5]}
			overflowY="scroll"
			
			height={['440px','450px']}
			mt={17}
		>
			{data.map((item, index) => (
				<Card key={index} data={item} />
			))}
		</Box>
	)
}

export default CardList
