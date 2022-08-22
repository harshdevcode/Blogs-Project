import Head from 'next/head';
import { getAllPosts, getPostBySlug, markdownToHTML } from './lib/api/helpers';

const Blog = ({
    post: {
        title,
        description,
        ogTitle,
        ogDescription,
        ogImage,
        htmlContent,
        keywords,
    },
}) => {
    return (
        <div>
            {/* Head */}
            <Head>
                {/* SEO Meta Tags */}
                <title>{title}</title>
                <meta
                    property='description'
                    content={description}
                    key='description'
                />
                <meta property='keywords' content={keywords} key='keywords' />

                {/* Open Graph Tags */}
                <meta property='og:title' content={ogTitle} key='ogTitle' />
                <meta
                    property='og:description'
                    content={ogDescription}
                    key='ogDescription'
                />
                <meta property='og:image' content={ogImage} key='ogImage' />
            </Head>

            {/* Content */}
            <div>{title}</div>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export async function getStaticProps({ params }) {
    const slug = params.slug;

    const post = getPostBySlug(slug, [
        'title',
        'description',
        'ogTitle',
        'ogDescription',
        'ogImage',
        'content',
        'keywords',
    ]);

    const htmlContent = await markdownToHTML(post.content || '');

    return {
        props: {
            post: {
                ...post,
                htmlContent,
            },
        },
    };
}

export function getStaticPaths() {
    const posts = getAllPosts(['slug']);
    return {
        paths: posts.map((post) => {
            return { params: { slug: post.slug } };
        }),
        fallback: false,
    };
}

export default Blog;
