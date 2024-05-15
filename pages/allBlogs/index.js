"use-strict"
import { getAllPosts } from '../../helpers/helpers';
import PostItem from '../../components/post-item';
import Headline from 'components/heading';
import styles from 'styles/homepage.module.css';

export default function AllPosts({ posts }) {
    return (
        <div className={styles.homepage_container}>
             <Headline text="All Posts" />
            <div className="latest-posts-grid"> 
                        {posts.map((post, index) => (
                            <PostItem {...post} key={post.slug} />
                        ))}
                    </div>
        </div>
    );
}

export async function getStaticProps() {
    console.log('fetched')
    const posts = getAllPosts(['title', 'description', 'createdOn', 'slug', 'thumbnail']);
    return {
        props: {
            posts,
        },
    };
}