import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const clientCredentials = {
	apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FB_AUTIDOMAIN,
	projectId: process.env.NEXT_PUBLIC_FB_PROJECTID,
	storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FB_SENDER_ID,
	appId: process.env.NEXT_PUBLICK_FB_APP_ID,
}

const app = !getApps().length ? initializeApp(clientCredentials) : getApp()

export const auth = getAuth(app)
