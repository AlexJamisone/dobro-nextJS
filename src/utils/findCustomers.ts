import { baseCallApi } from './api/baseCallApi'
import customerInfo from './customerInfo'
import findTransition from './findTransition'
import { CheckData } from './getOrder'
import { createBaseAvatar } from './createBaseAvatar'
import { Avatar } from '@prisma/client'

export interface Customers {
	id: number
	bonus: number
	firstName: string
	avatar: Avatar | undefined
	createTime: string
	sex: 'male' | 'female'
	saved: number
	spent: number
	dateOfBirth?: string
	transactions: CheckData[]
}

interface DataApi {
	id: number
	firstName: string
	sex: 'male' | 'female'
	createTime: string
	dateOfBirth?: string
}

export const findCustomers = async (phone: string) => {
	try {
		const data = await baseCallApi('/bonuses/filterCustomers', 'POST', {
			search: phone,
		})
		const customer = Promise.all(
			await data.customers.map(
				async ({
					createTime,
					firstName,
					id,
					sex,
					dateOfBirth,
				}: DataApi): Promise<Customers> => {
					const avatar = await createBaseAvatar(id)
					const { bonus, spent } = await customerInfo(id)
					const {
						bonusesReceivedAllTime: saved,
						orderData: transactions,
					} = await findTransition(phone)
					return {
						id,
						firstName,
						avatar,
						dateOfBirth,
						bonus,
						createTime,
						sex,
						saved,
						spent,
						transactions,
					}
				}
			)
		)
		return customer
	} catch (error) {
		console.log(error)
	}
}

export default findCustomers
