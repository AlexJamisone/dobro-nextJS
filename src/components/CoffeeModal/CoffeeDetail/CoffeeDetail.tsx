import { Grid, GridItem, Image, Text, Stack, Icon } from '@chakra-ui/react'
import { dbCofeeDataApi } from '../../MainContent/Content'
import CoffeeGrade from '../CoffeeGrade/CoffeeGrade'
import CoffeeHandler from '../CoffeeHandler/CoffeeHandler'
import CoffeeStars from '../CoffeeStars/CoffeeStars'

interface CoffeeDetailProps {
	data: dbCofeeDataApi
}

const CoffeeDetail = ({
	data: {
		description,
		img,
		name,
		price,
		acidity,
		density,
		grade,
		handler,
		height,
		reg,
	},
}: CoffeeDetailProps) => {
	console.log(grade)
	return (
		<Grid
			templateColumns="repeat(2, 1fr)"
			columnGap={2}
			fontSize={[14, 16]}
		>
			<GridItem>
				<Image alt={name} src={img} w={[150, 250]} />
			</GridItem>
			<GridItem w={'100%'}>
				<Stack>
					<CoffeeStars acidity={acidity} density={density} />
					<CoffeeHandler handler={handler} />
					<CoffeeGrade grade={grade} />
					{height === null ? null : <Text>Высота: {height}</Text>}
					{reg === null ? null : <Text>Регион: {reg}</Text>}
				</Stack>
			</GridItem>
			<GridItem mb={3}>
				<Text
					textAlign="center"
					fontWeight={600}
					fontSize={[27]}
					bg="whiteAlpha.100"
					rounded="full"
					boxShadow="lg"
				>
					{price}
				</Text>
			</GridItem>
			<GridItem colSpan={2}>
				<Text textAlign="center" mb={1}>
					Описание
				</Text>
				<Text>{description}</Text>
			</GridItem>
		</Grid>
	)
}

export default CoffeeDetail
