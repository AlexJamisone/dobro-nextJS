import { NextApiRequest, NextApiResponse } from 'next'
import { dbCofeeDataApi } from '../../types/types'
import baseCallApi from '../../utils/api/baseCallApi'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const api_url =
			'https://update-dobrocoffee.vercel.app/api/create/coffee'
		const response = await fetch(api_url, {
			method: 'GET',
		})
		const data = await response.json()
		const apiCallData: dbCofeeDataApi[] = await data.dbCoffee
		const dataWithRatio = await Promise.all(
			apiCallData.map(
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
							ratio: response.ratio,
							storeQuantityKg: response.storeQuantityKg,
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
