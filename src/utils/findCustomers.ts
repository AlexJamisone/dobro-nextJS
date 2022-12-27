import { baseCallApiPOST } from './api/baseCallApiPOST'
import findBonus from './findBonus'
import findTransition from './findTransition'

export const findCustomers = async (phone: string) => {
	const data = await baseCallApiPOST('/bonuses/filterCustomers', 'POST', {
		search: phone,
	})
	const tokensArr = await data.customers.map((a: any) => a.tokens)
	const tokens: string = tokensArr[0][0].key
	const orderData = await findTransition(tokens)
	console.log(orderData)
	return findBonus(tokens)
}

export default findCustomers
