import base64 from 'base-64'
import findBonus from './findBonus'


export const findCustomers = async (phone: any) => {
	const api_url: string =
		'https://tp791.quickresto.ru/platform/online/bonuses/filterCustomers'
	const response = await fetch(api_url, {
		headers: new Headers({
			Authorization: `Basic ${base64.encode(
				`${process.env.QR_API_LOGIN}:${process.env.QR_API_PASSWORD}`
			)}`,
			'Content-Type': 'application/json',
		}),
		body: JSON.stringify({
			search: phone,
		}),
		method: 'POST',
	})
	const data = await response.json()
	const tokensArr = data.customers.map((a: any) => a.tokens)
	const tokens: string = tokensArr[0][0].key
    return findBonus(tokens)
}

export default findCustomers