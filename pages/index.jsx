/*
------------------------------------------------------
    Blog Site Homepage - 
    This Page will be displayed when user
    hit https://www.miniorange.com/blogs
------------------------------------------------------
*/

import { PostItem } from '../components/post-item';
import { getAllPosts } from './lib/api/helpers';

export default function Home({ allPosts }) {
    return (
        <div>
            <div className='p-4 grid grid-cols-4'>
                {allPosts.map((post) => (
                    <PostItem key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'thumbnail',
        'excerpt',
        'content',
    ]);
    return {
        props: { allPosts },
    };
}
