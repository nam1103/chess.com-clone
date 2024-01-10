/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.chesscomfiles.com",
				pathname: "**",
			},
		],
	},
};

module.exports = nextConfig;
