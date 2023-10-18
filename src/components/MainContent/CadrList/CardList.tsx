import { Box } from '@chakra-ui/react'
import Card from '../Card/Card'
import { dbCofeeDataApi } from '../../../types/types'

interface CardListProps {
	data: dbCofeeDataApi[] | undefined
}

const CardList = ({ data }: CardListProps) => {
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
				maskImage:
					'linear-gradient(to bottom, black 55%, rgba(0, 0, 0, 0.01) 90%)',
			}}
			w={[300, 417]}
		>
			{data?.map((item) => (
				<Card key={item.id} data={item} />
			))}
		</Box>
	)
}

export default CardList
