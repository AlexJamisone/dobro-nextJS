import { baseCallApiPOST } from './api/baseCallApiPOST'
export const findBonus = async (token: string) => {
	const data = await baseCallApiPOST('/bonuses/customerInfo', 'POST', {
		customerToken: {
			key: token,
		},
		accountType: {
			accountGuid: 'bonus_account_type-1',
		},
	})
	return data
}

export default findBonus
