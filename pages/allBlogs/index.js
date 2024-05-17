"use-strict"
import { useState, useEffect } from 'react';
import { getAllPosts } from '../../helpers/helpers';
import styles from 'styles/homepage.module.css';
import Headline from 'components/heading';
import PostList from 'components/post-list';
import Button from "components/button";

const POSTS_PER_PAGE = 15;

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

    const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = sortedPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

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
                className={`py-xs px-rg mr-2 bg-white border rounded-full  ${sortingCriteria === 'latest'? 'border-accent' : 'border-accent-100' } duration-150 hover:shadow-md`}
            >
                Sort by Date
            </button>
            <button
                onClick={() => handleSortingCriteriaChange('category')}
                className={`py-xs px-rg  bg-white border rounded-full  ${sortingCriteria === 'category'? 'border-accent' : 'border-accent-600'} duration-150 hover:shadow-md`}
            >
                Sort by Category
            </button>
            {currentPosts.map((post, index) => (
                <PostList index={index} post={post} />
            ))}

            <div className="flex flex-wrap justify-center items-center w-full gap-1 my-3">
                <Button
                    text="Previous"
                    variant="secondary"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                />
                {Array.from({ length: totalPages }, (_, index) => (
                    <Button
                        key={index + 1}
                        text={index + 1}
                        variant={index + 1 === currentPage ? 'secondary' : ''}
                        onClick={() => handlePageChange(index + 1)}
                        disabled={index + 1 === currentPage}
                    />
                ))}
                <Button
                    text="Next"
                    variant="secondary"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                />
            </div>

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
