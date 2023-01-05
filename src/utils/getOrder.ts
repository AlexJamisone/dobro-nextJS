import baseCallApiGET from './api/baseCallApiGET'

export interface CheckDataApi {
	name: string
	amount: number
	totalPrice: number
}

export interface CheckData {
	date: string
	items: CheckDataApi[]
	totalPrice: number
	getBonus: number
	wasPayBonus: boolean
	paidBonus: number | null
}

export const getOrder = async (
	arrOrderId: Array<number>,
	time: Array<string>,
	bonus: Array<number>,
	wasPayBonus: Array<boolean>,
	paidBonus: Array<number | null>
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
					({ amount, name, totalPrice }: CheckDataApi) => {
						return {
							amount,
							name,
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
	const totalPrice = check.map((item: CheckDataApi[]) =>
		item.reduce(
			(acc: number, val: CheckDataApi) =>
				(acc = acc + val.totalPrice),
			0
		)
	)
	const res = check.map(
		(item: CheckDataApi[], index: number): CheckData => ({
			date: time[index],
			totalPrice: totalPrice[index],
			getBonus: bonus[index],
			wasPayBonus: wasPayBonus[index],
			paidBonus: paidBonus[index],
			items: item,
		})
	)
	return res
}

export default getOrder
