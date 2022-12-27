import { NextApiRequest, NextApiResponse } from 'next'
import { baseCallApiGET } from '../../utils/api/baseCallApiGET'

interface CheckData {
	name: string
	amount: number
	totalPrice: number
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const array = [32381, 32382, 32383]
		const time = [
			'2022-12-27T11:40:40.667Z',
			'2022-12-29T11:40:37.739Z',
			'2022-12-26T16:39:46.943Z',
		]
		const getOrder = async (arr: Array<number>, time: Array<string>) => {
			return Promise.all(
				arr.map(async (item) => {
					try {
						const moduleName = 'front.orders'
						const data = await baseCallApiGET(
							`/api/read?moduleName=${moduleName}&objectId=${item}`,
							'GET'
						)
						const check = data.orderItemList.map(
							({ name, amount, totalPrice }: CheckData) => {
								return {
									name,
									amount,
									totalPrice,
								}
							}
						)
						time.map(item => check.push(item))
						
						console.log(check)
						return check
					} catch (error) {
						console.log(error)
					}
				})
			)
		}
		const fetch = await getOrder(array, time)
		console.log(fetch)
		res.status(200).json(fetch)
	} catch (error) {
		console.log('Here is error', error)
	}
}
