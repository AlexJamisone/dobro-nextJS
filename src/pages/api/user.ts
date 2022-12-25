import { NextApiResponse, NextApiRequest } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { user } = req.body
	if (!user) {
		res.redirect('/signin')
	} else {
		res.redirect('/profile')
	}
	return res.status(200).json({ message: 'ok', user })
}
