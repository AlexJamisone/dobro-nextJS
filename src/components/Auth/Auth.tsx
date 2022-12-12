import { Box, Button, Center, FormLabel, Input } from '@chakra-ui/react'
import {
	RecaptchaVerifier,
	signInWithPhoneNumber,
	ConfirmationResult,
	getAuth,
} from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase/clientApp'
const Auth = () => {
	const code = '+7'
	const [phone, setPhone] = useState(code)
	const generateRecapcha = () => {
		window.recaptchaVerifier = new RecaptchaVerifier(
			'recaptcha-container',
			{
				'size': 'invisible',
				'callback': () => {},
			},
			auth
		)
	}

	const requestCode = (e: React.SyntheticEvent) => {
		e.preventDefault()
		if (phone.length >= 12) {
			generateRecapcha()
			let appVerifier = window.recaptchaVerifier
			signInWithPhoneNumber(auth, phone, appVerifier)
				.then((res) => {
					window.confirmationResult = res
				})
				.catch((err) => console.log(err))
		}
	}
	return (
		<Center position='relative'>
			<form onSubmit={requestCode}>
				<FormLabel>Phone</FormLabel>
				<Input zIndex={1000} type='tel' value={phone} onChange={(e) => {
					e.preventDefault()
					setPhone(e.target.value)
				}}/>
				<Center position='absolute' left='50%' zIndex={1000} id='recaptcha-container'></Center>
				<Button zIndex={1000} type="submit">Go</Button>
			</form>
		</Center>
	)
}

export default Auth
