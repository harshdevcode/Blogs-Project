/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    trailingSlash: true,
    /*
        Todo
            For dev: Comment [ basePath: "/blog", ]
            For build: Uncomment [ basePath: "/blog", ]
     */
    basePath: "/blog",
};

module.exports = nextConfig;
