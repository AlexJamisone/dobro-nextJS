import { Center, Text } from '@chakra-ui/react'
import moment from 'moment'
import 'moment/locale/ru'
import { useQuery } from 'react-query'
import { useAuth } from '../../context/AuthContext'
import { Customers } from '../../utils/findCustomers'
import CheckTable from '../CheckTable/CheckTable'
import NewUser from '../NewUser/NewUser'
import SkeletonComponent from '../Skeleton/Sceleton'
import UserAvatar from '../UserAvatar/UserAvatar'

const UserContent = () => {
	const { user } = useAuth()
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
					{data?.map(
						({
							id,
							bonus,
							firstName,
							avatar,
							createTime,
							transactions,
						}: Customers) => (
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
								<Text>Привет {firstName}</Text>
								<Text>У тебя сейчаc {bonus} бонусов</Text>
								<Text>
									Ты с нами уже{' '}
									{moment(createTime).fromNow(true)}
								</Text>
								{transactions.length === 0 ? (
									<Text>Пока что нет чеков</Text>
								) : (
									<CheckTable transactions={transactions} />
								)}
							</Center>
						)
					)}
				</>
			)}
		</>
	)
}

export default UserContent
