/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['theweldercatherine.ru', 'coffee-static.storage.yandexcloud.net']
	}
}

module.exports = nextConfig