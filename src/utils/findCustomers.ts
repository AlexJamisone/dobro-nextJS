import { baseCallApiPOST } from './api/baseCallApiPOST'
import customerInfo from './customerInfo'
import findTransition from './findTransition'
import { CheckData } from './getOrder'
import { db } from '../firebase/clientApp'
import { doc, getDoc } from 'firebase/firestore'

interface Customers {
	id: number
	bonus: number
	firstName: string
	avatar: {
		publicId: string | null
		format: string | null
		version: string | null
	}
	createTime: string
	sex: string
	token: string
	saved: number
	spent: number
	transactions: CheckData[]
}

export const findCustomers = async (phone: string) => {
	const data = await baseCallApiPOST('/bonuses/filterCustomers', 'POST', {
		search: phone,
	})
	const tokensArr = Promise.all(
		await data.customers.map(async (item: any): Promise<Customers> => {
			const { bonus, spent } = await customerInfo(item.id)
			const { bonusesReceivedAllTime: saved, orderData: transactions } =
				await findTransition(item.tokens[0].key)
			return {
				id: item.id,
				firstName: item.firstName,
				avatar: {
					format: null,
					publicId: null,
					version: null,
				},
				bonus,
				createTime: item.createTime,
				sex: item.sex,
				token: item.tokens[0].key,
				saved,
				spent,
				transactions,
			}
		})
	)
	return tokensArr
}

export default findCustomers
