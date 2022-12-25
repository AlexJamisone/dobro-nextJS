import { useEffect } from 'react'
import { Text } from '@chakra-ui/react'
import UserContent from '../components/UserContent/UserContent'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
const Profile = () => {
	const router = useRouter()
	const { user } = useAuth()
	useEffect(() => {
		if (user) {
			return
		} else if (user === null) {
			router.push('/signin')
		}
		console.log('render useEffect')
	}, [user])
	if (!user) {
		return null
	}
	return (
		<>
			<UserContent />
			<Text>Hello</Text>
		</>
	)
}
export default Profile
