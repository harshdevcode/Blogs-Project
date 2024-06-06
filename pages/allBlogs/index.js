"use-strict"
import { useState, useEffect } from 'react';
import { getAllPosts } from '../../helpers/helpers';
import styles from 'styles/homepage.module.css';
import Headline from 'components/heading';
import PostList from 'components/post-list';
import PaginationButtons from 'components/pagination-buttons';

const postsPerPage = 15;

export default function AllPosts({ posts }) {
    const [sortingCriteria, setSortingCriteria] = useState('latest');
    const [currentPage, setCurrentPage] = useState(1);

    const handleSortingCriteriaChange = (criteria) => {
        setSortingCriteria(criteria);
        setCurrentPage(1);
    };

    const sortedPosts = posts.sort((a, b) => {
        if (sortingCriteria === 'latest') {
            return new Date(b.createdOn) - new Date(a.createdOn); // Sort by latest first
        } else if (sortingCriteria === 'category') {
            // If category is an array, compare the first element of each array
            const categoryA = Array.isArray(a.category) ? a.category[0] : a.category;
            const categoryB = Array.isArray(b.category) ? b.category[0] : b.category;
            return categoryA.localeCompare(categoryB); // Sort by category
        }
    });

    const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);
    
    return (
        <div className={styles.homepage_container}>
            <Headline text="All Posts" />
            <button
                onClick={() => handleSortingCriteriaChange('latest')}
                className={`py-xs px-rg mr-2 bg-white border rounded-full  ${sortingCriteria === 'latest' ? 'border-accent' : 'border-accent-100'} duration-150 hover:shadow-md`}
            >
                Sort by Date
            </button>
            <button
                onClick={() => handleSortingCriteriaChange('category')}
                className={`py-xs px-rg  bg-white border rounded-full  ${sortingCriteria === 'category' ? 'border-accent' : 'border-accent-600'} duration-150 hover:shadow-md`}
            >
                Sort by Category
            </button>
            {currentPosts.map((post, index) => (
                <PostList index={index} post={post} />
            ))}

            <PaginationButtons
                currentPage={currentPage}
                totalPages={Math.ceil(posts.length / postsPerPage)}
                onPageChange={setCurrentPage}
            />

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
