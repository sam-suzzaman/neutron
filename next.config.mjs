/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: () => [
        {
            source: "/:path*",
            headers: [
                {
                    key: "Cache-Control",
                    value: "no-store",
                },
            ],
        },
    ],
    experimental: {
        staleTimes: {
            dynamic: 0,
            static: 100,
        },
    },
};

export default nextConfig;
