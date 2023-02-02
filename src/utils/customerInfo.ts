import baseCallApiGET from './api/baseCallApi'

export const customerInfo = async (id: number) => {
	const moduleName = 'crm.customer'
	const response = await baseCallApiGET(
		`/api/read?moduleName=${moduleName}&objectId=${id}`,
		'GET'
	)
	const bonus = await response.accounts.map(
		(item: any) => item.accountBalance.ledger
	)
	const spent = await response.accumulationBalance.ledger
	return {
		bonus: parseInt(bonus.toString()),
		spent,
	}
}

export default customerInfo
