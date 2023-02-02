import { NextApiRequest, NextApiResponse } from 'next'
import findCustomers from '../../utils/findCustomers'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const phone = req.body
		const data = await findCustomers("+79780616352")
		console.log(data)
		res.status(200).json(data)
	} catch (error) {
		console.log(error)
	}
}
