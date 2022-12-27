import { Center, Text, Spinner } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { useAuth } from '../../context/AuthContext'
import { useState } from 'react'
const UserContent = () => {
	const { user } = useAuth()
	const { data, isLoading } = useQuery('user', async () => {
		const response = await fetch('api/searchClient', {
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify("+79787046864"),
			method: 'POST',
		})
		return await response.json()
	})
	console.log(data)
	return (
		<>
			{isLoading ? (
				<Center>
					<Spinner />
				</Center>
			) : (
				<Center>
					<Text>Привет {data?.data?.firstName}</Text>
				</Center>
			)}
		</>
	)
}

export default UserContent
