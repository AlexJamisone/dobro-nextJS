import {
	Grid,
	GridItem,
	Image,
	Text,
	Stack,
	Spinner,
	Center,
} from '@chakra-ui/react'
import CoffeeGrade from '../CoffeeGrade/CoffeeGrade'
import CoffeeHandler from '../CoffeeHandler/CoffeeHandler'
import CoffeeStars from '../CoffeeStars/CoffeeStars'
import { dbCofeeDataApi } from '../../../types/types'
import CoffeeAvailability from '../CoffeeAvailability/CoffeeAvailability'

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
		ratio,
		storeQuantityKg,
	},
}: CoffeeDetailProps) => {
	return (
		<Grid
			templateColumns="repeat(2, 1fr)"
			columnGap={2}
			fontSize={[14, 16]}
		>
			<GridItem alignSelf="center">
				<Image
					alt={name}
					src={img}
					w={[150, 250]}
					fallback={
						<Center>
							<Spinner justifySelf="center" size={['md', 'xl']} />
						</Center>
					}
				/>
			</GridItem>
			<GridItem>
				<Stack>
					<CoffeeStars acidity={acidity} density={density} />
					<CoffeeHandler handler={handler} />
					<CoffeeGrade grade={grade} />
					{height === null ? null : <Text>Высота: {height}</Text>}
					{reg === null ? null : <Text>Регион: {reg}</Text>}
				</Stack>
			</GridItem>
			<GridItem my={3} colStart={1}>
				<Text
					textAlign="center"
					fontWeight={600}
					fontSize={[27]}
					bg="whiteAlpha.100"
					rounded="full"
					boxShadow="lg"
				>
					{price} ₽
				</Text>
			</GridItem>
			<GridItem my={3} colStart={2}>
				<CoffeeAvailability
					ratio={ratio}
					storeQuantityKg={storeQuantityKg}
				/>
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
