import { Box } from '@chakra-ui/react'

import { useAuth } from '../../context/AuthContext'
import FormAuth from '../FormAuth/FormAuth'
import UserContent from '../UserContent/UserContent'

const Auth = () => {
	const { user } = useAuth()
	return <Box>{user ? <UserContent /> : <FormAuth />}</Box>
}

export default Auth