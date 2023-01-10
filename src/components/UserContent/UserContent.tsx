import { Center, Avatar, Text, Spinner } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { useAuth } from '../../context/AuthContext'
import { Customers } from '../../utils/findCustomers'
import SkeletonComponent from '../Skeleton/Sceleton'
import UserAvatar from '../UserAvatar/UserAvatar'
import moment from 'moment'
import 'moment/locale/ru'
import CheckTable from '../CheckTable/CheckTable'

const UserContent = () => {
	const { user: session } = useAuth()
	const { data, isLoading, refetch } = useQuery(
		'user',
		async (): Promise<Customers[]> => {
			const response = await fetch('api/searchClient', {
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify('+79787046864'),
				method: 'POST',
			})
			return await response.json()
		}
	)
	return (
		<>
			{isLoading ? (
				<>
					<SkeletonComponent />
				</>
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
								alignItems='center'
							>
								<UserAvatar
									id={id}
									avatar={avatar}
									refetch={refetch}
								/>
								<Text>Привет {firstName}</Text>
								<Text>У тебя сейчай {bonus} бонуса</Text>
								<Text>
									Ты с нами уже {moment(createTime).fromNow(true)}
								</Text>
								<CheckTable transactions={transactions} />
							</Center>
						)
					)}
				</>
			)}
		</>
	)
}

export default UserContent
