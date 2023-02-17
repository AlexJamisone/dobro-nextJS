import { Text } from '@chakra-ui/react'
interface CoffeeAvailabilityProps {
	ratio: number
	storeQuantityKg: number
}

const CoffeeAvailability = ({
	ratio,
	storeQuantityKg,
}: CoffeeAvailabilityProps) => (
	<Text
		textAlign="center"
		fontWeight={400}
		fontSize={[16]}
		bg="whiteAlpha.100"
		rounded="full"
		boxShadow="lg"
		py={'8.25px'}
	>
		В наличии:{' '}
		{ratio === 0.25 ? storeQuantityKg / 0.25 : storeQuantityKg / 1}
	</Text>
)

export default CoffeeAvailability
