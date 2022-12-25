import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Auth from '../components/Auth/Auth'
import { useAuth } from '../context/AuthContext'

const SignIn = () => {
	const { user } = useAuth()
	const router = useRouter()
	useEffect(() => {
		if(user) {
			router.push('/profile')
		} else if (user === null) {
			return
		}
		console.log('hit render sigin');
	}, [])
	return (
		<>
			<Auth />
		</>
	)
}

export default SignIn
