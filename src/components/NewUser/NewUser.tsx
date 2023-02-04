import {
	Box,
	Button,
	Center,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	Icon,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { BsFillCalendar2Fill, BsFillTelephoneFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { QueryObserverResult } from 'react-query'
import { useAuth } from '../../context/AuthContext'
import { motion } from 'framer-motion'

export interface Fields {
	phone: string | undefined
	firstName: string
	birthday: string
}

interface NewUserProps {
	refetch: () => Promise<QueryObserverResult>
}

const NewUser = ({ refetch }: NewUserProps) => {
	const { user } = useAuth()
	const [fields, setFields] = useState<Fields>({
		birthday: '',
		firstName: '',
		phone: user?.phoneNumber as string,
	})
	const [error, setError] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)

	const handlSubmit = async (forms: Fields) => {
		try {
			setLoading(true)
			if (fields.firstName.length <= 0) {
				setError(true)
				setLoading(false)
			} else {
				const response = await fetch('/api/newUser', {
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'POST',
					body: JSON.stringify(forms),
				})
				await response.json()
				await refetch()
				setLoading(false)
			}
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<Center
			as={motion.div}
			initial={{ y: 50, opacity: 0 }}
			animate={{ y: 0, opacity: 1, type: 'spring' }}
			transitionDuration={'1.5s'}
			flexDirection="column"
			gap={10}
			mt={[10]}
		>
			<Text w={[500]} textAlign="center">
				Похоже у нас нет твоего бонусного счёта, но мы можем его сделать
			</Text>
			<Box
				as={FormControl}
				w={[300]}
				display="flex"
				flexDirection="column"
				gap={5}
			>
				<InputGroup>
					<InputLeftElement>
						<Icon
							as={BsFillTelephoneFill}
							color="#6e727a"
							_hover={{ cursor: 'not-allowed' }}
						/>
					</InputLeftElement>
					<Input
						isDisabled
						placeholder="Твой номер"
						value={fields.phone}
					/>
				</InputGroup>
				<FormControl isInvalid={error}>
					<InputGroup position="relative">
						<InputLeftElement>
							<Icon as={FaUser} />
						</InputLeftElement>
						<Input
							placeholder="Имя"
							onChange={(e) => {
								setError(false)
								setFields({
									...fields,
									firstName: e.target.value,
								})
							}}
							value={fields.firstName.trim()}
						/>
						{error ? (
							<FormErrorMessage
								position="absolute"
								bottom="-40%"
								fontSize={12}
							>
								Нам нужно хотя бы твоё имя
							</FormErrorMessage>
						) : null}
					</InputGroup>
				</FormControl>
				<InputGroup display="flex" flexDirection="column">
					<InputLeftElement>
						<Icon as={BsFillCalendar2Fill} />
					</InputLeftElement>
					<Input
						name="day"
						type="date"
						placeholder="Твоя дата рождения"
						onChange={(e) => {
							setFields({ ...fields, birthday: e.target.value })
						}}
						value={fields.birthday}
					/>
					<FormHelperText fontSize={12}>
						Твой День Рождения, что бы мы могли тебя поздравить!
					</FormHelperText>
				</InputGroup>
				<Button
					isLoading={loading}
					onClick={() => handlSubmit(fields)}
					onKeyUp={(e) =>
						e.key === 'Enter' ? handlSubmit(fields) : null
					}
				>
					Создать
				</Button>
			</Box>
		</Center>
	)
}

export default NewUser
