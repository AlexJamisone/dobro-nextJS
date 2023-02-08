import {
	Box,
	Button,
	Center,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Icon,
	Input,
	InputGroup,
	InputLeftElement,
	PinInput,
	PinInputField,
	useToast,
} from '@chakra-ui/react'
import { RecaptchaVerifier } from 'firebase/auth'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useReducer } from 'react'
import { BsEnvelope, BsFillTelephoneFill } from 'react-icons/bs'
import { GrSecure } from 'react-icons/gr'
import { RiErrorWarningLine } from 'react-icons/ri'
import { useAuth } from '../../context/AuthContext'
import { auth } from '../../firebase/clientApp'
import { FormAuthReducer, FormAuthState } from '../../reducers/FormAuth.reducer'

const FormAuth = () => {
	const toast = useToast()
	const router = useRouter()
	const { signin } = useAuth()
	const code: string = '+7'

	const initialState: FormAuthState = {
		error: false,
		loading: false,
		phone: null,
		pin: false,
	}

	const [state, dispatch] = useReducer(FormAuthReducer, initialState)
	const { error, loading, phone, pin } = state

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
			dispatch({ type: 'SET_LOADING', payload: true })
			const phoneNumber: string = code + phone?.toString()
			const phoneInput = phone?.toString()
			if (
				phoneInput === undefined ||
				phoneInput === '0' ||
				phoneInput.length < 10
			) {
				dispatch({ type: 'SET_ERROR', payload: true })
				dispatch({ type: 'SET_LOADING', payload: false })
			} else if (phoneNumber.length === 12) {
				generateRecapcha()
				let appVerifier = window.recaptchaVerifier
				const res = await signin(auth, phoneNumber, appVerifier)
				window.confirmationResult = res
				toast({
					title: `SMS было отправлена на номер ${phoneNumber}`,
					status: 'success',
					isClosable: true,
					duration: 4000,
					icon: <BsEnvelope />,
				})
				dispatch({ type: 'SET_PIN', payload: true })
				dispatch({ type: 'SET_LOADING', payload: false })
			} else if (phoneNumber.length > 12) {
				toast({
					title: `Неверная длинна номера телефона, проверь номер`,
					status: 'warning',
					isClosable: true,
					duration: 6000,
				})
				dispatch({ type: 'SET_LOADING', payload: false })
			}
		} catch (error) {
			toast({
				title: 'Похоже без VPN не получится зайти, прости :(',
				status: 'warning',
				isClosable: true,
				duration: 6000,
			})
			console.log(error)
		}
	}

	const verifyOTP = async (value: string) => {
		try {
			if (value.length === 6) {
				let confirmationResult = window.confirmationResult
				await confirmationResult.confirm(value)
				router.push('/profile')
				toast({
					title: 'Верный код, заходим',
					status: 'loading',
					isClosable: true,
				})
			}
		} catch (error) {
			console.log(error)
			toast({
				title: 'Неверный код',
				status: 'error',
				duration: 5000,
				isClosable: true,
				icon: <GrSecure />,
			})
		}
	}
	console.log(state)
	return (
		<Center
			mt={10}
			as={motion.div}
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1, type: 'spring' }}
			transitionDuration="1.5s"
		>
			<Box
				as="form"
				display="flex"
				flexDirection="column"
				justifyContent="center"
				gap={7}
				w={300}
				alignItems="center"
				onSubmit={requestCode}
			>
				<FormControl isInvalid={error}>
					<FormLabel textAlign="center">Телефон</FormLabel>
					<InputGroup>
						<InputLeftElement
							color={pin ? '#6e727a' : ''}
							display="flex"
							gap={2}
							ml={3}
							cursor={pin ? 'not-allowed' : 'default'}
						>
							<Icon as={BsFillTelephoneFill} />
							{code}
						</InputLeftElement>
						<Input
							position="relative"
							isDisabled={pin ? true : false}
							focusBorderColor={error ? 'red.400' : ''}
							type="number"
							pl={16}
							value={phone || ''}
							onChange={(e) => {
								e.preventDefault()
								dispatch({ type: 'SET_ERROR', payload: false })
								dispatch({
									type: 'SET_PHONE',
									payload: +e.target.value,
								})
							}}
						/>
						{error ? (
							<FormErrorMessage
								position="absolute"
								bottom="-45%"
								fontSize={12}
							>
								Нам нужен твой номер
							</FormErrorMessage>
						) : (
							<FormHelperText
								position="absolute"
								bottom={'-95%'}
								display="flex"
								alignItems="center"
								gap={2}
							>
								<Icon as={RiErrorWarningLine} fontSize={[20]} />
								Для входа нужно использовать VPN-сервис
							</FormHelperText>
						)}
					</InputGroup>
				</FormControl>
				<Center
					position="absolute"
					left="50%"
					id="recaptcha-container"
				></Center>
				{pin && (
					<Box m={5} display="flex" gap={3}>
						<PinInput
							otp
							autoFocus={pin}
							onChange={(value) => verifyOTP(value)}
						>
							<PinInputField />
							<PinInputField />
							<PinInputField />
							<PinInputField />
							<PinInputField />
							<PinInputField />
						</PinInput>
					</Box>
				)}
				{pin ? null : (
					<Button type="submit" isLoading={loading} mt={5}>
						Войти
					</Button>
				)}
			</Box>
		</Center>
	)
}

export default FormAuth
