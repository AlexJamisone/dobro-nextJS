import { Text, Tooltip, IconButton, Stack } from '@chakra-ui/react'
import CoffeeToolTips from '../CoffeeToolTips/CoffeeToolTips'
interface CoffeeGradeProps {
	grade: number | null
}

const CoffeeGrade = ({ grade }: CoffeeGradeProps) => (
	<>
		{grade === null || grade === 0 ? null : (
			<Stack direction={'row'}>
				<Text>Q-оценка: {grade}</Text>
				<CoffeeToolTips label="Q-грейдинг — это единая система оценки кофе. Она помогает объективно оценивать кофе по 100-балльной шкале и присваивать ему класс. Для этого проводят каппинг — определяют вкус, аромат, послевкусие, дефекты и общее впечатление от кофе." />
			</Stack>
		)}
	</>
)

export default CoffeeGrade
