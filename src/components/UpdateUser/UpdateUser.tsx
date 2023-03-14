import {
	IconButton,
	Input,
	Button,
	FormControl,
	FormLabel,
	Radio,
	RadioGroup,
	Text,
	Stack,
	FormErrorMessage,
	useToast,
	Box,
} from '@chakra-ui/react'
import { IoReturnDownBack } from 'react-icons/io5'
import { Dispatch, SetStateAction } from 'react'
import { Customers } from '../../utils/findCustomers'
import { useReducer } from 'react'
import {
	NewUserReducer,
	NewUserFieldsState,
} from '../../reducers/NewUser.reducer'
import { useMutation, useQueryClient, QueryObserverResult } from 'react-query'

interface UpdateUserProps {
	editMode: boolean
	setEditMode: Dispatch<SetStateAction<boolean>>
	info: Customers
	refetch: () => Promise<QueryObserverResult>
}

const UpdateUser = ({
	editMode,
	setEditMode,
	info,
	refetch,
}: UpdateUserProps) => {
	const toast = useToast()
	const client = useQueryClient()
	const { firstName, id, sex, dateOfBirth } = info
	const initialState: NewUserFieldsState = {
		birthday: dateOfBirth?.substr(0, 10),
		error: false,
		firstName,
		loading: false,
		sex,
	}
	const [state, dispatch] = useReducer(NewUserReducer, initialState)
	const { error, firstName: name, loading, sex: sexOfUser, birthday } = state
	const handlUpdateUser = async (
		id: number,
		userInfo: NewUserFieldsState
	) => {
		try {
			if (userInfo.firstName.length === 0) {
				dispatch({ type: 'SET_ERROR', payload: true })
			} else {
				dispatch({ type: 'SET_LOADING', payload: true })
				const response = await fetch('/api/updateUser', {
					method: 'POST',
					body: JSON.stringify({ id, userInfo }),
				})
				await response.json()
				toast({
					title: 'Данные успешно обновленны!',
					status: 'success',
					isClosable: true,
					duration: 3000,
				})
				await refetch()
				dispatch({ type: 'SET_LOADING', payload: false })
				setEditMode(!editMode)
			}
		} catch (error) {
			console.log(error)
			toast({
				title: `Произошла ошибка: ${error}`,
				status: 'error',
				isClosable: true,
				duration: 3000,
			})
		}
	}
	const { mutate: update } = useMutation({
		mutationFn: async () => await handlUpdateUser(id, state),
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['user'] })
		},
	})
	console.log()
	return (
		<>
			<Box w={['80%','30%']}>
				<FormControl
					display="flex"
					flexDirection="column"
					gap={2}
					isInvalid={error}
				>
					<FormLabel textAlign="center">Имя</FormLabel>
					<Input
						placeholder="Твоё Имя"
						value={name}
						onChange={(e) => {
							dispatch({ type: 'SET_ERROR', payload: false })
							dispatch({
								type: 'SET_FIRST_NAME',
								payload: e.target.value,
							})
						}}
					/>
					{error ? (
						<FormErrorMessage>
							Пожалуйста укажит своё имя
						</FormErrorMessage>
					) : null}
				</FormControl>
				<FormLabel textAlign="center">Дата Рождения</FormLabel>
				<Input
					type="date"
					value={birthday}
					onChange={(e) =>
						dispatch({
							type: 'SET_BIRTHDAY',
							payload: e.target.value,
						})
					}
				/>
			</Box>
			<RadioGroup
				defaultValue={sexOfUser}
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
			<Stack direction={['row']}>
				<Button
					fontWeight={400}
					onClick={() => update()}
					isLoading={loading}
				>
					Сохранить
				</Button>
				<IconButton
					aria-label="back"
					icon={<IoReturnDownBack />}
					onClick={() => setEditMode(!editMode)}
				/>
			</Stack>
		</>
	)
}

export default UpdateUser
