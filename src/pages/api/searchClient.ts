import { NextApiRequest, NextApiResponse } from 'next'
import findCustomers from '../../utils/findCustomers'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const phone = req.body
		const data = await findCustomers(phone)

		console.log(data)
		res.status(200).json({ successful: true, data })
	} catch (error) {
		res.json({ message: 'You have no access' })
	}
}
