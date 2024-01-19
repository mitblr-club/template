/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  staticPageGenerationTimeout: 300,
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "www.notion.so",
      },
      {
        protocol: 'https',
        hostname: "notion.so",
      },
      {
        protocol: 'https',
        hostname: "images.unsplash.com",
      },
      {
        protocol: 'https',
        hostname: "s3-us-west-2.amazonaws.com",
      },
      {
        protocol: 'https',
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: 'https',
        hostname: "i.imgur.com"
      },
      {
        protocol: 'https',
        hostname: "https://www.shutterstock.com",
      },
    ],
		domains: [
			"www.notion.so",
			"notion.so",
			"images.unsplash.com",
			"s3-us-west-2.amazonaws.com",
			"lh3.googleusercontent.com",
			"i.imgur.com",
      "www.shutterstock.com",
		],
		formats: ["image/avif", "image/webp"],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy:
			"default-src 'self'; script-src 'none'; sandbox;",
	},
}



export default nextConfig
