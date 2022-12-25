import { useEffect, useState } from 'react'
import UserContent from '../components/UserContent/UserContent'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'




const Profile = () => {
	const [dataUser, setDataUser] = useState([])
	const router = useRouter()
	const { user } = useAuth()
	useEffect(() => {
		if (user) {
			return
		} else if (user === null) {
			router.push('/signin')
		}
	}, [user])
	useEffect(() => {
		const findUser = async () => {
			const response = await fetch('api/searchClient', {
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user?.phoneNumber),
				method: 'POST'
			})
			const data = await response.json()
			setDataUser(data)
		}
		findUser()
	}, [user])
	if (!user) {
		return null
	}
	// console.log(dataUser.data.accounts[0].accountBalance.available)
	return (
		<>
			<UserContent />
		</>
	)
}
export default Profile
