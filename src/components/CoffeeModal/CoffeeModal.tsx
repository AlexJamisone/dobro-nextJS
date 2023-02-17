import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react'
import { dbCofeeDataApi } from '../../types/types'
import CoffeeDetail from './CoffeeDetail/CoffeeDetail'
import WorkInProgres from './WorkInProgress/WorkInProgres'

interface CoffeeModalProps {
	isOpen: boolean
	onClose: () => void
	data: dbCofeeDataApi
}

const CoffeeModal = ({ isOpen, onClose, data }: CoffeeModalProps) => {
	const { name, description } = data
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent w={['90vw', '100vw']}>
				<ModalHeader textAlign="center">{name}</ModalHeader>
				<ModalCloseButton />
				<ModalBody px={[2, 5]} pb={[5]}>
					{description === 'defult' ? (
						<WorkInProgres data={data} />
					) : (
						<CoffeeDetail data={data} />
					)}
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default CoffeeModal
