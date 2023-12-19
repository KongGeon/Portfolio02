/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //디버그 도구인데 이거 켜놓으면 유스이펙트 2번씩 실행됨
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };

    return config;
  },
};

module.exports = nextConfig;
