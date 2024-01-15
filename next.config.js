/** @type {import('next').NextConfig} */
const nextConfig = {
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
    i18n: {
        locales: ['en'],
        defaultLocale: 'en', // default lang fr
    },
};

module.exports = nextConfig;
