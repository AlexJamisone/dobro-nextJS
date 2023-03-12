import { NextApiRequest, NextApiResponse } from 'next'
import baseCallApi from '../../utils/api/baseCallApi'
import { NewUserFieldsState } from '../../reducers/NewUser.reducer'
import { Customers } from '../../utils/findCustomers'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const userInfo = req.body
		const {
			id,
			userInfo: { firstName, sex, birthday },
		} = JSON.parse(userInfo)
		const validName =
			firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()
		const response = baseCallApi(
			'/api/update/?moduleName=crm.customer',
			'POST',
			{
				id,
				firstName: validName,
				dateOfBirth: birthday,
				sex,
			}
		)
		res.status(200).json(response)
	} catch (error) {
		console.log(error)
	}
}
