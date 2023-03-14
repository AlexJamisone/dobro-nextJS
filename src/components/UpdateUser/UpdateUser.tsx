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
	useToast
} from '@chakra-ui/react'
import { IoReturnDownBack } from 'react-icons/io5'
import { Dispatch, SetStateAction } from 'react'
import { Customers } from '../../utils/findCustomers'
import { useReducer } from 'react'
import {
	NewUserReducer,
	NewUserFieldsState,
} from '../../reducers/NewUser.reducer'
import { useMutation, useQueryClient } from 'react-query'


interface UpdateUserProps {
	editMode: boolean
	setEditMode: Dispatch<SetStateAction<boolean>>
	info: Customers
}

const UpdateUser = ({ editMode, setEditMode, info }: UpdateUserProps) => {
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
			dispatch({type: "SET_LOADING", payload: true})
			const response = await fetch('/api/updateUser', {
				method: 'POST',
				body: JSON.stringify({ id, userInfo }),
			})
			await response.json()
			toast({
				title: 'Данные успешно обновленны!',
				status: 'success',
				isClosable: true,
				duration: 3000
			})
			dispatch({type: "SET_LOADING", payload: false})
		} catch (error) {
			console.log(error)
		}
	}
		const {mutate: update} = useMutation({
			mutationFn: async () => await handlUpdateUser(id, state),
			onSuccess: () => {
				client.invalidateQueries({ queryKey: ['user'] })
				setEditMode(!editMode)
			}
		})
	return (
		<>
			<FormControl display='flex' flexDirection='column' gap={2} w={'80%'}>
				<FormLabel textAlign='center'>Имя</FormLabel>
				<Input
					placeholder="Твоё Имя"
					value={name}
					onChange={(e) =>
						dispatch({
							type: 'SET_FIRST_NAME',
							payload: e.target.value,
						})
					}
					/>
				<FormLabel textAlign='center'>Дата Рождения</FormLabel>
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
			</FormControl>
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
			<Stack direction={['row', 'column']}>
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
