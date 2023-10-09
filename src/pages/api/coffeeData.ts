import { NextApiRequest, NextApiResponse } from 'next'
import { dbCofeeDataApi } from '../../types/types'
import axios from 'axios'
import baseCallApi from '../../utils/api/baseCallApi'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const api_url = process.env.API_POINT as string
		const response = await axios.get(api_url, {
			method: 'GET',
		})
		const data = await response.data[0].result?.data?.json
		const dataWithRatio = await Promise.all(
			data?.map(
				async (
					item: dbCofeeDataApi
				): Promise<dbCofeeDataApi | undefined> => {
					const { Iid } = item
					try {
						const response = await baseCallApi(
							`/api/get?moduleName=warehouse.nomenclature.singleproduct&objectId=${Iid}`,
							'GET'
						)
						return {
							...item,
							ratio: response?.ratio,
							storeQuantityKg: response?.storeQuantityKg,
						}
					} catch (error) {
						console.log(error)
					}
				}
			)
		)
		res.json(dataWithRatio)
	} catch (error) {
		console.log(error)
	}
}
