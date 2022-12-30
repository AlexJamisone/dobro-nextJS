import { Center, Avatar } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { useAuth } from '../../context/AuthContext'
import SkeletonComponent from '../Skeleton/Sceleton'
import UserAvatar from '../UserAvatar/UserAvatar'

const UserContent = () => {
	const { user: session } = useAuth()
	const { data, isLoading } = useQuery('user', async () => {
		const response = await fetch('api/searchClient', {
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify('+79787046864'),
			method: 'POST',
		})
		return await response.json()
	})
	console.log(data)
	return (
		<>
			{isLoading ? (
				<>
					<SkeletonComponent />
				</>
			) : (
				<>
					<UserAvatar/>
				</>
			)}
		</>
	)
}

export default UserContent
