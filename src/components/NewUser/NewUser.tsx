import {
	Box,
	Button,
	Center,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Icon,
	Input,
	InputGroup,
	InputLeftElement,
	Radio,
	RadioGroup,
	Stack,
	Text,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useReducer } from 'react'
import { BsFillCalendar2Fill, BsFillTelephoneFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { QueryObserverResult } from 'react-query'
import { useAuth } from '../../context/AuthContext'
import {
	NewUserFieldsState,
	NewUserReducer,
} from '../../reducers/NewUser.reducer'

interface NewUserProps {
	refetch: () => Promise<QueryObserverResult>
}

const NewUser = ({ refetch }: NewUserProps) => {
	const { user } = useAuth()
	const initialState: NewUserFieldsState = {
		birthday: '',
		firstName: '',
		phone: user?.phoneNumber as string,
		sex: 'male',
		error: false,
		loading: false,
	}
	const [state, dispatch] = useReducer(NewUserReducer, initialState)
	const { birthday, error, firstName, loading, phone, sex } = state

	const handlSubmit = async (forms: NewUserFieldsState) => {
		try {
			dispatch({ type: 'SET_LOADING', payload: true })
			if (firstName.length <= 0) {
				dispatch({ type: 'SET_ERROR', payload: true })
				dispatch({ type: 'SET_LOADING', payload: false })
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
				dispatch({ type: 'SET_LOADING', payload: false })
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
			<Text w={[400, 500]} textAlign="center">
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
					<Input isDisabled placeholder="Твой номер" value={phone} />
				</InputGroup>
				<FormControl isInvalid={error}>
					<InputGroup position="relative">
						<InputLeftElement>
							<Icon as={FaUser} />
						</InputLeftElement>
						<Input
							placeholder="Имя"
							onChange={(e) => {
								dispatch({ type: 'SET_ERROR', payload: false })
								dispatch({
									type: 'SET_FIRST_NAME',
									payload: e.target.value,
								})
							}}
							value={firstName}
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
							dispatch({
								type: 'SET_BIRTHDAY',
								payload: e.target.value,
							})
						}}
						value={birthday}
					/>
					<FormHelperText fontSize={12}>
						Твой День Рождения, что бы мы могли тебя поздравить!
					</FormHelperText>
				</InputGroup>
				<RadioGroup
					defaultValue={sex}
					onChange={(value) =>
						dispatch({
							type: 'SET_SEX',
							payload: value as 'male' | 'female',
						})
					}
				>
					<FormLabel>Пол</FormLabel>
					<Stack direction={['row', 'column']} gap={[3, 0]}>
						<Radio value={'male'} colorScheme="blue">
							<Text fontSize={[12, 16]}>Мужской</Text>
						</Radio>
						<Radio value={'female'} colorScheme="pink">
							<Text fontSize={[12, 16]}>Женский</Text>
						</Radio>
					</Stack>
				</RadioGroup>
				<Button
					isLoading={loading}
					onClick={() => handlSubmit(state)}
					onKeyUp={(e) =>
						e.key === 'Enter' ? handlSubmit(state) : null
					}
				>
					Создать
				</Button>
			</Box>
		</Center>
	)
}

export default NewUser
