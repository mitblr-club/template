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
        hostname: "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg",
      },
    ],
		domains: [
			"www.notion.so",
			"notion.so",
			"images.unsplash.com",
			"s3-us-west-2.amazonaws.com",
			"lh3.googleusercontent.com",
			"i.imgur.com",
      "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg",
		],
		formats: ["image/avif", "image/webp"],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy:
			"default-src 'self'; script-src 'none'; sandbox;",
	},
}



export default nextConfig
