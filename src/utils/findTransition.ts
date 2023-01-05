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

	// revers check
	const revers = data.transactions.reverse()
	const lastCheck = revers
		.filter(
			(item: any) =>
				item.type === 'CREDIT' || item.type === 'DEBIT_CONFIRMATION'
		)
		.slice(0, 10)


	// get all uses bonus from user
	const bonusesReceivedAllTime = data.transactions
		.filter((item: any) => item.type === 'DEBIT_CONFIRMATION')
		.map((check: any) => check.amount)
		.reduce((acc: number, val: number) => (acc = acc + val), 0)

	//get users bonus from last 10 checks
	const bonusesReceivedLast = lastCheck
		.filter(
			(item: any) =>
				item.type === 'CREDIT' || item.type === 'DEBIT_CONFIRMATION'
		)
		.map((check: any) =>
			check.type === 'DEBIT_CONFIRMATION' ? 0 : check.amount
		)
	// Array how was pay check, bonus or money
	const wasPayBonus = lastCheck.map((item: any) =>
		item.type === 'DEBIT_CONFIRMATION' ? true : false
	)
	const payBonusAmount = lastCheck.map((item: any) =>
		item.type === 'DEBIT_CONFIRMATION' ? item.amount : null
	)
	// select orderID delet '#' and ,
	const arrOfOrders = lastCheck
		.map((item: any) => item.orderId)
		.toString()
		.split(/,|#/g)

	// delet all undefind and 0
	const spice = compact(arrOfOrders)

	//convert ordersId to number array
	const arrNum = spice.map((item: any) => parseInt(item))

	//select TimeCheck
	const time = lastCheck.map((item: any) => item.regTime)

	// get last 10 Check with data
	const orderData = await getOrder(
		arrNum,
		time,
		bonusesReceivedLast,
		wasPayBonus,
		payBonusAmount
	)
	return {
		bonusesReceivedAllTime,
		orderData,
	}
}

export default findTransition
