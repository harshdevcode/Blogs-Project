import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../../components/footer';
import PostItem from '../../components/post-item';
import { getCategories, getPostsForCategory } from '../../helpers/helpers';
import { capitalizeFirstLetter } from '../../helpers/string';

export default function Category({ posts }) {
    const router = useRouter();
    const { category } = router.query;

    return (
        <div>
            <div
                className={`
                [ w-full h-full px-4 py-4 pt-[107px] bg-slate-50 ]
                [ xl:px-[150px] ]
            `}
            >
                <div className='heading'>{capitalizeFirstLetter(category)}</div>
                <div className='mt-8 grid grid-cols-primary auto-rows-[328px] gap-4'>
                    {posts.map((post) => (
                        <PostItem key={post.slug} {...post} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export async function getStaticProps({ params }) {
    const { category } = params;
    const posts = getPostsForCategory(
        [
            'title',
            'description',
            'date',
            'slug',
            'author',
            'thumbnail',
            'excerpt',
            'content',
            'category',
            'tags',
            'createdOn',
        ],
        category
    );

    return {
        props: {
            posts: posts,
        },
    };
}

export async function getStaticPaths() {
    // Get Blogs for Category
    const categories = JSON.parse(getCategories());

    return {
        paths: categories.map((category) => {
            return { params: { category: category.title.toLowerCase() } };
        }),
        fallback: 'blocking',
    };
}
