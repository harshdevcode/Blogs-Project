/*
------------------------------------------------------
    Blog Site Homepage - 
    This Page will be displayed when user
    hit https://www.miniorange.com/blogs
------------------------------------------------------
*/

import styles from 'styles/homepage.module.css';

import Head from 'next/head';
import CategoryCard from '../components/category-card';
import Footer from '../components/footer';
import PostItem from '../components/post-item';
import PostSnippet from '../components/post-snippet';

import { getCategories, getPostsForCategory } from '../helpers/helpers';
import Headline from 'components/heading';
import TabItem from 'components/tab-item';
import { HOMEPAGE_DATA } from 'lib/data/homepage';
import { useState } from 'react';
import ResourceList from 'components/resource-list';

export default function Home({ payload }) {
    const data = JSON.parse(payload);

    const [resourcesActiveTab, setResourcesActiveTab] = useState('forums');

    const onTabClicked = (id) => {
        setResourcesActiveTab(id);
    };

    return (
        <>
            <Head>
                {/* SEO Meta Tags */}
                <title>Blog • miniOrange</title>
                <meta
                    name='description'
                    content='Everything you need to know about Identity Access Management, SSO and Authentication. Company updates &amp; Technology Trends.'
                    key='description'
                />
                <meta
                    property='keywords'
                    content='blogs, miniorange, wordpress, sso'
                    key='keywords'
                />

                {/* Open Graph Tags */}
                <meta property='og:title' content='Blog • miniOrange' key='ogTitle' />
                <meta
                    property='og:description'
                    content='Everything you need to know about Identity Access Management, SSO and Authentication. Company updates &amp; Technology Trends.'
                    key='ogDescription'
                />
            </Head>
            <main className={styles.homepage_container}>
                <Headline text='Featured Posts' />
                <div className='flex flex-col gap-md md:flex-row'>
                    <PostItem
                        {...data.main_blog}
                        key={data.main_blog.slug}
                        className='w-full md:w-3/4'
                        thumbnailLoading='eager'
                    />
                    <div className='w-full flex flex-col gap-md md:w-2/6'>
                        {data.featured.map((post) => (
                            <PostSnippet {...post} key={post.slug} />
                        ))}
                    </div>
                </div>

                {/* Latest Posts */}
                <Headline text='Latest Posts' />
                {data.latest.length !== 0 && (
                    <div className='latest-posts-grid'>
                        {data.latest.map((post, index) => (
                            <PostItem {...post} key={post.slug} />
                        ))}
                    </div>
                )}

                <section className='mt-xxl'>
                    {/* Tabs Container */}
                    <div className='flex gap-rg items-center'>
                        <TabItem
                            id='forums'
                            title='Forums'
                            active={resourcesActiveTab === 'forums'}
                            className='flex-1'
                            onClick={onTabClicked}
                        />
                        <TabItem
                            id='videos'
                            title='Videos'
                            active={resourcesActiveTab === 'videos'}
                            className='flex-1'
                            onClick={onTabClicked}
                        />
                        <TabItem
                            id='partnerships'
                            title='Partnerships'
                            active={resourcesActiveTab === 'partnerships'}
                            className='flex-1'
                            onClick={onTabClicked}
                        />
                    </div>

                    {/* Tab Content */}
                    <div className='mt-md'>
                        <ResourceList data={HOMEPAGE_DATA[resourcesActiveTab]} />
                    </div>
                </section>
            </main>
            {/* Footer */}
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const latest = getPostsForCategory(
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
        'latest'
    );

    const featured = getPostsForCategory(
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
        'featured'
    );

    const main = getPostsForCategory(
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
        'main'
    );

    const categories = getCategories();

    const payload = {
        featured,
        latest,
        categories,
        main_blog: main[0],
    };

    return {
        props: {
            payload: JSON.stringify(payload),
        },
    };
}
