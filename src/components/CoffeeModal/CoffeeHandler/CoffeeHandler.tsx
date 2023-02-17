import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import CoffeeToolTips from '../CoffeeToolTips/CoffeeToolTips'

interface CoffeeHandlerProps {
	handler: string
}

const CoffeeHandler = ({ handler }: CoffeeHandlerProps) => (
	<Stack direction={['row']} alignItems="center">
		<Text w={handler === 'Натуральный' ? ['100%', '188px'] : ['150px']}>
			Обработка: {handler}
		</Text>
		<CoffeeToolTips label="Обработка — это этап производства, который напрямую влияет на вкус кофе. Например, кофе натуральной обработки — часто менее кислотный и более плотный, кофе мытой обработки — наоборот, более кислотный и лёгкий. Однако всегда возможны исключения, так как эти характеристики зависят не только от способа обработки." />
	</Stack>
)

export default CoffeeHandler
