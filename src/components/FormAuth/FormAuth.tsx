import {
	Center,
	Box,
	FormLabel,
	Input,
	PinInput,
	PinInputField,
	Button,
} from '@chakra-ui/react'
import { RecaptchaVerifier } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase/clientApp'
import { useAuth } from '../../context/AuthContext'

const FormAuth = () => {
	const { signin } = useAuth()
	const code = '+7'
	const [phone, setPhone] = useState(code)
	const [pin, setPin] = useState(false)

	const generateRecapcha = () => {
		window.recaptchaVerifier = new RecaptchaVerifier(
			'recaptcha-container',
			{
				size: 'invisible',
				callback: () => {},
			},
			auth
		)
	}

	const requestCode = async (e: React.SyntheticEvent) => {
		e.preventDefault()
		try {
			if (phone.length >= 12) {
				generateRecapcha()
				let appVerifier = window.recaptchaVerifier
				const res = await signin(auth, phone, appVerifier)
				window.confirmationResult = res
				setPin(true)
			}
		} catch (error) {
			console.log(error)
		}
	}

	const verifyOTP = async (value: string) => {
        try {
            if(value.length === 6) {
                let confirmationResult = window.confirmationResult
                await confirmationResult.confirm(value)
            }
        } catch (error) {
            console.log(error)
        }
		// if (value.length === 6) {
		// 	let confirmationResult = window.confirmationResult
		// 	confirmationResult
		// 		.confirm(value)
		// 		.then((res) => {
		// 			const user = res.user
		// 		})
		// 		.catch((err) => console.log(err))
		// }
	}
	return (
		<Center>
			<Box
				as="form"
				display="flex"
				flexDirection="column"
				justifyContent="center"
				gap={3}
				w={300}
				alignItems="center"
				onSubmit={requestCode}
			>
				<FormLabel>Телефон</FormLabel>
				<Input
					zIndex={1000}
					type="tel"
					value={phone}
					onChange={(e) => {
						e.preventDefault()
						setPhone(e.target.value)
					}}
				/>
				<Center
					position="absolute"
					left="50%"
					zIndex={1000}
					id="recaptcha-container"
				></Center>
				{pin && (
					<Box m={5} display="flex">
						<PinInput otp onChange={(value) => verifyOTP(value)}>
							<PinInputField />
							<PinInputField />
							<PinInputField />
							<PinInputField />
							<PinInputField />
							<PinInputField />
						</PinInput>
					</Box>
				)}
				{pin ? null : <Button type="submit">Войти</Button>}
			</Box>
		</Center>
	)
}

export default FormAuth
