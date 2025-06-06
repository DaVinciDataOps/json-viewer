import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  staticImage: true,
  defaultShowCopyCode: true
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    domains: ['i.imgur.com', 'www.netlify.com']
  },
  transpilePackages: ['@wim4you/json-viewer']
}

export default withNextra(nextConfig)
