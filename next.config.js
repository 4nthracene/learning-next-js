/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	images: {
		domains: ["*", "randomuser.me" , "*.cnn.com" ]
	}
}

module.exports = nextConfig
