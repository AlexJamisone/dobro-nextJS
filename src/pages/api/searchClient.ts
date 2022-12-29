import { NextApiRequest, NextApiResponse } from 'next'
import findCustomers from '../../utils/findCustomers'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const phone = req.body
		const data = await findCustomers(phone)
		res.status(200).json(data)
	} catch (error) {
		res.json({ message: 'You have no access', error })
	}
}
