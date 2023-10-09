/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['theweldercatherine.ru', 'coffee-static.storage.yandexcloud.net', 'tea-coffee-plus.ru']
	}
}

module.exports = nextConfig