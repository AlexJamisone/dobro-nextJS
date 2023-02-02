import { NextApiRequest, NextApiResponse } from 'next'
import { Fields } from '../../components/NewUser/NewUser'
import { baseCallApi } from '../../utils/api/baseCallApi'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { birthday, firstName, phone }: Fields = req.body
		await baseCallApi('/bonuses/createCustomer', 'POST', {
			firstName,
			dateOfBirth:
				birthday.length === 0 ? new Date().toLocaleString : birthday,
			contactMethods: [
				{
					type: 'phoneNumber',
					value: phone,
				},
			],
		})
		res.status(200).json({ message: '✔' })
	} catch (error) {
		console.log(error)
		res.json({ message: 'Not allowd' })
	}
}
