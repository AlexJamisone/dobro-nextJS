import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import 'firebase/firestore'

const clientCredentials = {
	apiKey: process.env.FB_API_KEY,
	authDomain: process.env.FB_AUTIDOMAIN,
	projectId: process.env.FB_PROJECTID,
	storageBucket: process.env.FB_STORAGE_BUCKET,
	messagingSenderId: process.env.FB_SENDER_ID,
	appId: process.env.FB_APP_ID,
}

const app = initializeApp(clientCredentials)

export const auth = getAuth(app)
