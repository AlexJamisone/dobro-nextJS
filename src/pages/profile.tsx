import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import UserContent from '../components/UserContent/UserContent'
import { useAuth } from '../context/AuthContext'

const Profile = () => {
	const router = useRouter()
	const { user } = useAuth()
	useEffect(() => {
		if (user) {
			return
		} else if (user === null) {
			router.push('/signin')
		}
	}, [user])
	if (!user) {
		return null
	}
	return (
		<Box>
			<UserContent/>
		</Box>
	)
}
export default Profile
