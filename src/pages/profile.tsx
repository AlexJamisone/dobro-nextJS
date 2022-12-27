import { useEffect, useState } from 'react'
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
	}, [user])
	if (!user) {
		return null
	}
	return (
		<>
			<UserContent/>
		</>
	)
}
export default Profile
