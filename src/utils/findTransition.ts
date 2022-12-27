import { baseCallApiPOST } from './api/baseCallApiPOST'
import { compact } from 'lodash'
import { getOrder } from './getOrder'
export const findTransition = async (token: string) => {
	const data = await baseCallApiPOST('/bonuses/operationHistory', 'POST', {
		customerToken: {
			key: token,
		},
		accountType: {
			accountGuid: 'bonus_account_type-1',
		},
	})
	const revers = data.transactions.reverse()
	const arrOfOrders = revers
		.slice(0, 11)
		.map((item: any) => item.orderId)
		.toString()
		.split(/,|#/g)
	const spice = compact(arrOfOrders)
	const arrNum = spice.map((item: any) => parseInt(item))
	const time = revers.slice(0, 11).map((item: any) => item.regTime)
	console.log(time)
	const orderData = await getOrder(arrNum)
	return orderData
}

export default findTransition
