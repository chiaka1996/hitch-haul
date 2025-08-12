/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        // pathname: '/YOUR_CLOUD_NAME/**', // Replace with your actual cloud name
      },
    ],
  },

};

export default nextConfig;
