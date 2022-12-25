import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'

import { useAuth } from '../../context/AuthContext'
import FormAuth from '../FormAuth/FormAuth'


const Auth = () => {
	const { user } = useAuth()
	return (
		<Box>
			<FormAuth />
		</Box>
	)
}

export default Auth
