/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    swcMinify: true,
    trailingSlash: true,
    /*
        Todo
            For dev: Comment [ basePath: "/blog", ]
            For build: Uncomment [ basePath: "/blog", ]
    */
    basePath: '/blog',
    images: {
        domains: [
            'testsite.miniorange.com',
            'images.ctfassets.net',
            'firebasestorage.googleapis.com',
            'blog.miniorange.com',
            'www.miniorange.com',
            'blogs.miniorange.com',
        ],
        unoptimized: true,
    },
};

module.exports = nextConfig;
