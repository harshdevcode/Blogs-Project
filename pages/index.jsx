/*
------------------------------------------------------
    Blog Site Homepage - 
    This Page will be displayed when user
    hit https://www.miniorange.com/blogs
------------------------------------------------------
*/

import styles from 'styles/homepage.module.css';

import Head from 'next/head';
import Footer from '../components/footer';
import PostItem from '../components/post-item';
import PostSnippet from '../components/post-snippet';

import { getCategories, getFeaturedPosts, getLatestPosts, getMainPosts } from '../helpers/helpers';
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
                <meta name="title" content="Blog • miniOrange" />
                <meta
                    name="description"
                    content="Everything you need to know about Identity Access Management, SSO and Authentication. Company updates &amp; Technology Trends."
                    key="description"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Blog • miniOrange" key="ogTitle" />
                <meta
                    property="og:description"
                    content="Everything you need to know about Identity Access Management, SSO and Authentication. Company updates &amp; Technology Trends."
                    key="ogDescription"
                />

                <link rel="canonical" href="https://www.miniorange.com/blog/" />
            </Head>
            <main className={styles.homepage_container}>
                {/* <Headline text='Featured Posts' /> */}
                <div className="mt-8 flex flex-col gap-md md:flex-row relative">
                    <PostItem
                        {...data.main_blog}
                        key={data.main_blog.slug}
                        className="w-full md:w-8/12"
                        thumbnailLoading="eager"
                    />
                    <div className="md:w-4/12 relative md:overflow-y-scroll w-full flex flex-col gap-md self-stretch h-full md:absolute right-0 bottom-0 top-0 pl-5">
                        {data.featured.map((post) => (
                            <PostSnippet {...post} key={post.slug} />
                        ))}
                    </div>
                </div>

                {/* Latest Posts */}
                <Headline text="Latest Posts" />
                {data.latest.length !== 0 && (
                    <div className="latest-posts-grid">
                        {data.latest.map((post, index) => (
                            <PostItem {...post} key={post.slug} />
                        ))}
                    </div>
                )}

                <section className="mt-xxl">
                    {/* Tabs Container */}
                    <div className="flex gap-rg items-center">
                        <TabItem
                            id="forums"
                            title="Forums"
                            active={resourcesActiveTab === 'forums'}
                            className="flex-1"
                            onClick={onTabClicked}
                        />
                        <TabItem
                            id="videos"
                            title="Videos"
                            active={resourcesActiveTab === 'videos'}
                            className="flex-1"
                            onClick={onTabClicked}
                        />
                        <TabItem
                            id="partnerships"
                            title="Partnerships"
                            active={resourcesActiveTab === 'partnerships'}
                            className="flex-1"
                            onClick={onTabClicked}
                        />
                    </div>

                    {/* Tab Content */}
                    <div className="mt-md">
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
    const latest = getLatestPosts();
    const featured = getFeaturedPosts();
    const main = getMainPosts();
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
