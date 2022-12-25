import { NextApiRequest, NextApiResponse } from 'next'
import base64 from 'base-64'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const objectId = 35183
		const moduleName = 'front.orders'
		const api_url = `https://tp791.quickresto.ru/platform/online/api/read?moduleName=${moduleName}&objectId=${objectId}`
		const response = await fetch(api_url, {
			headers: new Headers({
				Authorization: `Basic ${base64.encode(
					`${process.env.QR_API_LOGIN}:${process.env.QR_API_PASSWORD}`
				)}`,
				'Content-Type': 'application/json',
			}),
			method: 'GET',
		})
		console.log(api_url)
		const data = await response.json()
		res.status(200).json({ data })
	} catch (error) {
		console.log(error)
	}
}
