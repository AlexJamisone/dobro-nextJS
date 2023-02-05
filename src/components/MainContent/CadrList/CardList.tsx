import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import Card from '../Card/Card'
import { dbCofeeDataApi } from '../Content'

type CardListP = {
	data: dbCofeeDataApi[] | undefined
}

const CardList: FC<CardListP> = ({ data }) => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			mx={[3, 0]}
			gap={[5]}
			overflowY="scroll"
			overflowX="hidden"
			height={['440px', '450px']}
			mt={17}
			sx={{
				'::-webkit-scrollbar': {
					display: 'none',
				},
			}}
			w={[300, 417]}
		>
			{data?.map((item, index) => (
				<Card key={index} data={item} />
			))}
		</Box>
	)
}

export default CardList
