import baseCallApiGET from './api/baseCallApiGET'

export interface CheckDataApi {
	name: string
	amount: number
	totalPrice: number
}

export interface CheckData {
	date: string
	items: CheckDataApi
	totalPrice: number
}

export const getOrder = async (
	arrOrderId: Array<number>,
	time: Array<string>
) => {
	const check = await Promise.all(
		arrOrderId.map(async (orderId) => {
			try {
				const moduleName = 'front.orders'
				const data = await baseCallApiGET(
					`/api/read?moduleName=${moduleName}&objectId=${orderId}`,
					'GET'
				)
				const check = data.orderItemList.map(
					({ name, amount, totalPrice }: CheckDataApi) => {
						return {
							name,
							amount,
							totalPrice,
						}
					}
				)
				return check
			} catch (error) {
				console.log(error)
			}
		})
	)
	const totalPrice = check.map((item: [], index: number) =>
		item.reduce(
			(acc: number, val: CheckDataApi) => (acc = acc + val.totalPrice),
			0
		)
	)
	const res = check.map(
		(item: CheckDataApi, index: number): CheckData => ({
			date: time[index],
			totalPrice: totalPrice[index],
			items: item,
		})
	)
	return res
}

export default getOrder
