import { Tooltip, IconButton } from '@chakra-ui/react'
import { RxQuestionMark } from 'react-icons/rx'

interface CoffeeToolTipsProps {
	label: string
}

const CoffeeToolTips = ({ label }: CoffeeToolTipsProps) => (
	<Tooltip p={5} hasArrow rounded={25} label={label}>
		<IconButton
			rounded={50}
			size="xs"
			aria-label="QuestionMark"
			icon={<RxQuestionMark />}
		/>
	</Tooltip>
)

export default CoffeeToolTips
