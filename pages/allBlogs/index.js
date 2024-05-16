"use-strict"
import { useState } from 'react';
import { getAllPosts } from '../../helpers/helpers';
import styles from 'styles/homepage.module.css';
import Headline from 'components/heading';
import PostList from 'components/post-list';


export default function AllPosts({ posts }) {
    const [sortingCriteria, setSortingCriteria] = useState('latest'); // Default sorting criteria

    // Function to handle sorting criteria change
    const handleSortingCriteriaChange = (criteria) => {
        setSortingCriteria(criteria);
    };

    // Sort posts based on the selected sorting criteria
    const sortedPosts = posts.sort((a, b) => {
        if (sortingCriteria === 'latest') {
            return new Date(b.createdOn) - new Date(a.createdOn); // Sort by latest first
        } 
        // else if (sortingCriteria === 'category') {
        //     return a.category.localeCompare(b.category); // Sort by category
        // }
    });

    return (
        <div className={styles.homepage_container}>
            {/* <button onClick={() => handleSortingCriteriaChange('latest')}>Sort by Latest</button>
            <button onClick={() => handleSortingCriteriaChange('category')}>Sort by Category</button> */}

            <Headline text="All Posts" />
            {sortedPosts.map((post, index) => (
                <PostList index={index} post={post} />
            ))}
        </div>
    );
}

export async function getStaticProps() {
    const posts = getAllPosts(['title', 'description', 'createdOn', 'slug', 'category']);
    return {
        props: {
            posts,
        },
    };
}
