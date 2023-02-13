import { Icon, Stack, Text } from '@chakra-ui/react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
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
						as={AiFillStar}
						color="yellow.400"
						fontSize={[16, 25]}
					/>
					<Icon
						as={AiOutlineStar}
						color="yellow.400"
						fontSize={[16, 25]}
					/>
					<Icon
						as={AiOutlineStar}
						color="yellow.400"
						fontSize={[16, 25]}
					/>
				</>
			) : acidity === 'Neutral' ? (
				<>
					<Icon
						as={AiFillStar}
						color="yellow.400"
						fontSize={[16, 25]}
					/>
					<Icon
						as={AiFillStar}
						color="yellow.400"
						fontSize={[16, 25]}
					/>
					<Icon
						as={AiOutlineStar}
						color="yellow.400"
						fontSize={[16, 25]}
					/>
				</>
			) : (
				<>
					<Icon
						as={AiFillStar}
						color="yellow.400"
						fontSize={[16, 25]}
					/>
					<Icon
						as={AiFillStar}
						color="yellow.400"
						fontSize={[16, 25]}
					/>
					<Icon
						as={AiFillStar}
						color="yellow.400"
						fontSize={[16, 25]}
					/>
				</>
			)}
		</Stack>
		<Text>Плотность</Text>
		<Stack direction={'row'}>
			{density === 'Tea' ? (
				<>
					<Icon
						as={AiFillStar}
						color="yellow.400"
						fontSize={[16, 25]}
					/>
					<Icon
						as={AiOutlineStar}
						color="yellow.400"
						fontSize={[16, 25]}
					/>
					<Icon
						as={AiOutlineStar}
						color="yellow.400"
						fontSize={[16, 25]}
					/>
				</>
			) : density === 'Neutral' ? (
				<>
					<Icon
						as={AiFillStar}
						color="yellow.400"
						fontSize={[16, 25]}
					/>
					<Icon
						as={AiFillStar}
						color="yellow.400"
						fontSize={[16, 25]}
					/>
					<Icon
						as={AiOutlineStar}
						color="yellow.400"
						fontSize={[16, 25]}
					/>
				</>
			) : (
				<>
					<Icon
						as={AiFillStar}
						color="yellow.400"
						fontSize={[16, 25]}
					/>
					<Icon
						as={AiFillStar}
						color="yellow.400"
						fontSize={[16, 25]}
					/>
					<Icon
						as={AiFillStar}
						color="yellow.400"
						fontSize={[16, 25]}
					/>
				</>
			)}
		</Stack>
	</>
)

export default CoffeeStars
