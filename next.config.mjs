import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // penting untuk static export
    trailingSlash: true, // agar semua route jadi folder, cocok untuk GH Pages
    images: {
      unoptimized: true, // karena GH Pages tidak support image optimization
    },
    basePath: "/my-portofolio", // sesuai nama repo GitHub kamu
  };
  
export default withSentryConfig(
    nextConfig,
    {
      silent: true,
      org: "javascript-mastery",
      project: "javascript-nextjs",
    },
    {
      widenClientFileUpload: true,
      transpileClientSDK: true,
      hideSourceMaps: true,
      disableLogger: true,
      automaticVercelMonitors: true,
    }
  );
  