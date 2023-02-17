import { Icon, Stack, Text } from '@chakra-ui/react'
import { GiPlainCircle, GiCircle } from 'react-icons/gi'
interface CoffeeStarsProps {
	acidity: 'Bitter' | 'Neutral' | 'Acid'
	density: 'Tea' | 'Neutral' | 'Dense'
}

const CoffeeStars = ({ acidity, density }: CoffeeStarsProps) => (
	<>
		<Text>Кислотность</Text>
		<Stack direction={'row'}>
			{acidity === 'Bitter' ? (
				<>
					<Icon
						as={GiPlainCircle}
						color="yellow.400"
						fontSize={[12, 15]}
					/>
					<Icon
						as={GiCircle}
						color="yellow.400"
						fontSize={[12, 15]}
					/>
					<Icon
						as={GiCircle}
						color="yellow.400"
						fontSize={[12, 15]}
					/>
				</>
			) : acidity === 'Neutral' ? (
				<>
					<Icon
						as={GiPlainCircle}
						color="yellow.400"
						fontSize={[12, 15]}
					/>
					<Icon
						as={GiPlainCircle}
						color="yellow.400"
						fontSize={[12, 15]}
					/>
					<Icon
						as={GiCircle}
						color="yellow.400"
						fontSize={[12, 15]}
					/>
				</>
			) : (
				<>
					<Icon
						as={GiPlainCircle}
						color="yellow.400"
						fontSize={[12, 15]}
					/>
					<Icon
						as={GiPlainCircle}
						color="yellow.400"
						fontSize={[12, 15]}
					/>
					<Icon
						as={GiPlainCircle}
						color="yellow.400"
						fontSize={[12, 15]}
					/>
				</>
			)}
		</Stack>
		<Text>Плотность</Text>
		<Stack direction={'row'}>
			{density === 'Tea' ? (
				<>
					<Icon
						as={GiPlainCircle}
						color="yellow.400"
						fontSize={[12, 15]}
					/>
					<Icon
						as={GiCircle}
						color="yellow.400"
						fontSize={[12, 15]}
					/>
					<Icon
						as={GiCircle}
						color="yellow.400"
						fontSize={[12, 15]}
					/>
				</>
			) : density === 'Neutral' ? (
				<>
					<Icon
						as={GiPlainCircle}
						color="yellow.400"
						fontSize={[12, 15]}
					/>
					<Icon
						as={GiPlainCircle}
						color="yellow.400"
						fontSize={[12, 15]}
					/>
					<Icon
						as={GiCircle}
						color="yellow.400"
						fontSize={[12, 15]}
					/>
				</>
			) : (
				<>
					<Icon
						as={GiPlainCircle}
						color="yellow.400"
						fontSize={[12, 15]}
					/>
					<Icon
						as={GiPlainCircle}
						color="yellow.400"
						fontSize={[12, 15]}
					/>
					<Icon
						as={GiPlainCircle}
						color="yellow.400"
						fontSize={[12, 15]}
					/>
				</>
			)}
		</Stack>
	</>
)

export default CoffeeStars
