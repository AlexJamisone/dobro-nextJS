import { NextApiRequest, NextApiResponse } from 'next'
import { baseCallApiGET } from '../../utils/api/baseCallApiGET'
import baseCallApiPOST from '../../utils/api/baseCallApiPOST'
import { customerInfo } from '../../utils/customerInfo'
import { findTransition } from '../../utils/findTransition'
import { CheckData, CheckDataApi } from '../../utils/getOrder'

interface Customers {
	id: number
	bonus: number
	firstName: string
	createTime: string
	sex: string
	token: string
	saved: number
	transactions: CheckData[]
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const findCustomers = async (phone: string) => {
			const data = await baseCallApiPOST(
				'/bonuses/filterCustomers',
				'POST',
				{
					search: phone,
				}
			)
			const tokensArr = Promise.all(
				await data.customers.map(async (item: any): Promise<Customers> => {
					const { bonus, saved } = await customerInfo(item.id)
					const transactions = await findTransition(
						item.tokens[0].key
					)
					return {
						id: item.id,
						firstName: item.firstName,
						bonus,
						createTime: item.createTime,
						sex: item.sex,
						token: item.tokens[0].key,
						saved,
						transactions
					}
				})
			)
			// const tokens: string = tokensArr[0][0].key
			console.log(tokensArr)
			return tokensArr
		}
		// const array = [32381, 32382, 32383]
		// const time = [
		// 	'2022-12-27T11:40:40.667Z',
		// 	'2022-12-29T11:40:37.739Z',
		// 	'2022-12-26T16:39:46.943Z',
		// ]
		// const getOrder = async (arr: Array<number>, time: Array<string>) => {
		// 	const check = await Promise.all(
		// 		arr.map(async (orderId) => {
		// 			try {
		// 				const moduleName = 'front.orders'
		// 				const data = await baseCallApiGET(
		// 					`/api/read?moduleName=${moduleName}&objectId=${orderId}`,
		// 					'GET'
		// 				)
		// 				const check = data.orderItemList.map(
		// 					({ name, amount, totalPrice }: CheckData) => {
		// 						return {
		// 							name,
		// 							amount,
		// 							totalPrice,
		// 						}
		// 					}
		// 				)

		// 				check.map((item: CheckData, index: number) => ({
		// 					date: time[index],
		// 					items: item,
		// 				}))

		// 				return check
		// 			} catch (error) {
		// 				console.log(error)
		// 			}
		// 		})
		// 	)
		// 	const res = check.map((item, index) => ({
		// 		date: time[index],
		// 		items: item,
		// 	}))
		// 	return res
		// }
		const fetch = await findCustomers('+79787046864')
		res.status(200).json({ fetch })
	} catch (error) {
		console.log('Here is error', error)
	}
}
