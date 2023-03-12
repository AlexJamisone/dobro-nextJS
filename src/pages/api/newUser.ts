import { NextApiRequest, NextApiResponse } from 'next'
import { NewUserFieldsState } from '../../reducers/NewUser.reducer'
import { baseCallApi } from '../../utils/api/baseCallApi'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { birthday, firstName, phone, sex }: NewUserFieldsState = req.body
		let name = firstName.trim()
		const validName =
			name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
		await baseCallApi('/bonuses/createCustomer', 'POST', {
			firstName: validName,
			dateOfBirth:
				birthday?.length === 0 ? new Date().toLocaleString : birthday,
			contactMethods: [
				{
					type: 'phoneNumber',
					value: phone,
				},
			],
			sex,
		})
		res.status(200).json({ message: '✔' })
	} catch (error) {
		console.log(error)
		res.json({ message: 'Not allowd' })
	}
}
