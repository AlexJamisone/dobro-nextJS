import React, { useContext, createContext, useEffect, useState } from 'react'
import {
	onAuthStateChanged,
	RecaptchaVerifier,
	Auth,
	signInWithPhoneNumber,
	signOut,
	User,
	ConfirmationResult,
} from 'firebase/auth'
import { auth } from '../firebase/clientApp'

interface ContextProps {
    user: User | null
    signin: (auth: Auth, phone: string, appVerifier: RecaptchaVerifier) => Promise<ConfirmationResult>
    logout: () => Promise<void>
}


const AuthContext = createContext<ContextProps>({} as ContextProps)

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user)
			} else {
				setUser(null)
			}
			setLoading(false)
		})
		return () => unsub()
	}, [])

	const signin = (
		auth: Auth,
		phone: string,
		appVerifier: RecaptchaVerifier
	): Promise<ConfirmationResult> =>
		signInWithPhoneNumber(auth, phone, appVerifier)

	const logout = async (): Promise<void> => {
		setUser(null)
		await signOut(auth)
	}

	return (
		<AuthContext.Provider value={{ user, signin, logout }}>
			{loading ? null : children}
		</AuthContext.Provider>
	)
}
