import base64 from 'base-64'

export const findBonus = async (token: string) => {
    const api_url: string = 'https://tp791.quickresto.ru/platform/online/bonuses/customerInfo'
    const response = await fetch(api_url, {
		headers: new Headers({
			Authorization: `Basic ${base64.encode(
				`${process.env.QR_API_LOGIN}:${process.env.QR_API_PASSWORD}`
			)}`,
			'Content-Type': 'application/json',
		}),
		body: JSON.stringify({
			customerToken: {
                key: token
            },
            accountType: {
                accountGuid: "bonus_account_type-1"
            }
		}),
		method: 'POST',
	})
	const data = await response.json()
    return data
} 

export default findBonus