import base64 from 'base-64'
export const baseCallApi = async (
	url_path: string,
	method: 'GET' | 'POST',
	...body: any | null
) => {
	const api_url = `https://tp791.quickresto.ru/platform/online${url_path}`
	const response = await fetch(api_url, {
		headers: new Headers({
			Authorization: `Basic ${base64.encode(
				`${process.env.QR_API_LOGIN}:${process.env.QR_API_PASSWORD}`
			)}`,
			'Content-Type': 'application/json',
		}),
		method: method,
		body: body ? JSON.stringify(body[0]) : null
	})
    const data = await response.json()
    return data
}

export default baseCallApi
