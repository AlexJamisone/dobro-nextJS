import { baseCallApiPOST } from './api/baseCallApiPOST'
import findBonus from './findBonus'
import findTransition from './findTransition'

interface Customers {
	id: number
	bonus: number
	createTime: string
	sex: string
	token: string
	saved: number
	transactions: []
}

export const findCustomers = async (phone: string) => {
	const data = await baseCallApiPOST('/bonuses/filterCustomers', 'POST', {
		search: phone,
	})
	const tokensArr = await data.customers.map((item: any):Customers => {
		return {
			id: item.id,
			bonus: item.accounts[0].accountBalance.ledger,
			createTime: item.createTime,
			saved: 1111,
			token: item.tokens[0][0].key,
			sex: item.sex,
			transactions: []
		}
	})
	// const tokens: string = tokensArr[0][0].key
	// const orderData = await findTransition(tokens)
	console.log(tokensArr)
	return tokensArr
	// return findBonus(tokens)
}

export default findCustomers
