import { useState } from 'react'
import { Center, Text, Button } from '@chakra-ui/react'
import moment from 'moment'
import 'moment/locale/ru'
import { useQuery } from 'react-query'
import { useAuth } from '../../context/AuthContext'
import { Customers } from '../../utils/findCustomers'
import CheckTable from '../CheckTable/CheckTable'
import NewUser from '../NewUser/NewUser'
import SkeletonComponent from '../Skeleton/Sceleton'
import UserAvatar from '../UserAvatar/UserAvatar'
import UpdateUser from '../UpdateUser/UpdateUser'

const UserContent = () => {
	const { user } = useAuth()
	const [editMode, setEditMode] = useState<boolean>(false)
	const { data, isLoading, refetch } = useQuery('user', async () => {
		try {
			const response = await fetch('api/searchClient', {
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(user?.phoneNumber),
				method: 'POST',
			})
			return await response.json()
		} catch (error) {
			console.log(error)
		}
	})
	return (
		<>
			{isLoading ? (
				<>
					<SkeletonComponent />
				</>
			) : data?.length === 0 ? (
				<NewUser refetch={refetch} />
			) : (
				<>
					{data?.map((user: Customers) => {
						const {
							avatar,
							bonus,
							createTime,
							firstName,
							id,
							saved,
							sex,
							spent,
							transactions,
							dateOfBirth
						} = user
						return (
							<Center
								key={id}
								flexDirection="column"
								gap={5}
								justifyContent="center"
								alignItems="center"
							>
								<UserAvatar
									id={id}
									avatar={avatar}
									refetch={refetch}
								/>
								{editMode ? (
									<UpdateUser
										info={user}
										editMode={editMode}
										setEditMode={setEditMode}
										refetch={refetch}
									/>
								) : (
									<>
										<Text>Привет {firstName}</Text>
										<Text>
											У тебя сейчаc {bonus} бонусов
										</Text>
										<Text>
											Ты с нами уже{' '}
											{moment(createTime).fromNow(true)}
										</Text>
										<Button
											fontWeight={400}
											onClick={() =>
												setEditMode(!editMode)
											}
										>
											Редактировать профиль
										</Button>
										{transactions.length === 0 ? (
											<Text>Пока что нет чеков</Text>
										) : (
											<CheckTable
												transactions={transactions}
											/>
										)}
									</>
								)}
							</Center>
						)
					})}
				</>
			)}
		</>
	)
}

export default UserContent
