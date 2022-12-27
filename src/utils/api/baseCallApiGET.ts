import base64 from 'base-64'
export const baseCallApiGET = async (
	url_path: string, //https://tp791.quickresto.ru/platform/online${url_path}
	method: string, // 'POST', 'GET' etc..
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
	})
    const data = await response.json()
    return data
}

export default baseCallApiGET
