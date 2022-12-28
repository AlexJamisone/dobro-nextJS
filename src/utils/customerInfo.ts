import baseCallApiGET from './api/baseCallApiGET'

export const customerInfo = async (id: number) => {
	const moduleName = 'crm.customer'
	const response = await baseCallApiGET(
		`/api/read?moduleName=${moduleName}&objectId=${id}`,
		'GET'
	)
	const bonus = await response.accounts.map(
		(item: any) => item.accountBalance.ledger
	)
	const saved = await response.accumulationBalance.ledger
	return {
        bonus: parseInt(bonus.toString()),
        saved
    }
}

export default customerInfo
