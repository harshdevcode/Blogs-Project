import styles from 'styles/blog-details.module.css';
import Head from 'next/head';
import CommentBox from 'components/comment-box';
import CommentsList from 'components/comments-list';
import Footer from 'components/footer';
import TagsList from 'components/tags-list';
import useStatus from 'hooks/useStatus';
import markdownStyles from 'styles/markdown-styles.module.css';
import { parse } from 'node-html-parser';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'components/button';
import Image from 'next/image';

import axios from 'axios';
import { getAllPosts, getHeadlines, getPostBySlug, markdownToHTML } from 'helpers/helpers';
import Link from 'next/link';

const INITIAL_COMMENT_TEXT = {
    content: '',
    email: '',
    name: '',
};

const Blog = ({ payload }) => {
    const data = JSON.parse(payload);

    const {
        html,
        post: {
            id,
            title,
            description,
            metaTitle,
            metaDescription,
            ogTitle,
            ogDescription,
            ogImage,
            tags,
            mainButtonText,
            mainButtonLink,
            thumbnail,
        },
        tocs,
        comments,
        canonical,
    } = data;

    const router = useRouter();
    const slug = router.query.slug;
    const [comment, setComment] = useState({
        ...INITIAL_COMMENT_TEXT,
        post_slug: slug,
    });

    const [{ loading, success, error }, setStatus] = useStatus();
    const [activeSection, setActiveSection] = useState('');

    const handleCommentChange = (e) => {
        const { name, value } = e.target;
        setComment({ ...comment, [name]: value });
    };

    const handleSubmitComment = async () => {
        // Comment Body Validation
        if (comment.content && comment.email && comment.name) {
            // Update comments array on frontend
            setStatus({ loading: true, success: false, error: false });
            try {
                const postedComment = await axios({
                    method: 'POST',
                    url: `/blog/api/comments/${id}`,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: JSON.stringify(comment),
                });

                await postedComment.data;
                setComment({ ...INITIAL_COMMENT_TEXT, post_slug: slug });
                setStatus({ loading: false, success: true, error: false });
            } catch (e) {
                console.log(e);
                setStatus({ loading: false, success: false, error: true });
            }
        } else {
            // Show Error Message
            window.alert('Please write your comment in comment box');
        }
    };

    const getCurrentSectionId = () => {
        const currentSectionId = window.location.hash.replace('#', '');
        return currentSectionId;
    };

    useEffect(() => {
        const onHashChanged = () => {
            setActiveSection(getCurrentSectionId);
        };

        window.addEventListener('hashchange', onHashChanged);

        if (!getCurrentSectionId()) {
            setActiveSection('main');
        }

        return () => {
            window.removeEventListener('hashchange', onHashChanged);
        };
    }, []);

    return (
        <>
            <Head>
                {/* SEO Meta Tags */}
                <title>{title}</title>
                <meta name='title' content={metaTitle} />
                <meta name='description' content={metaDescription} />

                {/* Open Graph Info */}
                <meta property='og:title' content={metaTitle} />
                <meta property='og:description' content={metaDescription} />
                <meta property='og:image' content={ogImage} key='ogImage' />
                <link rel='canonical' href={canonical} />
            </Head>
            <section className={styles.container}>
                {/* Hero Section */}
                <div id='main' className={`${styles.hero_section} scroll-mt-52`}>
                    <div className='flex-1'>
                        <h1 className='mt-md lg:mt-0 display'>{title}</h1>
                        <p className='caption mt-md'>{description}</p>
                        <Link href={mainButtonLink || 'https://www.miniorange.com/contact'}>
                            <Button text={mainButtonText || 'Get Demo'} className='mt-xl' />
                        </Link>
                    </div>

                    <picture className='aspect-video relative sm:w-[50%] h-0 sm:pb-[25%]'>
                        <Image
                            className='absolute inset-0 object-cover w-full h-full'
                            src={thumbnail}
                            alt={slug}
                            fill
                        />
                    </picture>
                </div>
                <article className='flex flex-col justify-center lg:flex-row border-b'>
                    {/* Side Nav Links */}
                    <aside className={styles.side_nav_container}>
                        <div className={styles.side_nav_wrapper}>
                            <a
                                href={`#main`}
                                className={`title ${styles.side_nav_link} mt-sm ${
                                    activeSection === 'main' ? 'font-semibold' : 'font-normal'
                                }`}
                            >
                                Introduction
                            </a>
                            {tocs.map((headline) => (
                                <a
                                    key={headline.id}
                                    href={`#${headline.id}`}
                                    className={`title ${styles.side_nav_link} ${
                                        activeSection === headline.id
                                            ? 'font-semibold'
                                            : 'font-normal'
                                    }`}
                                >
                                    {headline.text}
                                </a>
                            ))}
                        </div>
                    </aside>

                    {/* Blog Content */}
                    <main
                        id='markdown-container'
                        dangerouslySetInnerHTML={{ __html: html }}
                        className={`
                            [ ${markdownStyles['markdown']} w-full [ lg:w-8/12 ] order-2 p-md ]
                            [ lg:order-2 ]
                        `}
                    ></main>

                    {/* Tags Section */}
                    <aside className={styles.tags_container}>
                        <TagsList tags={tags} />
                    </aside>
                </article>

                {/* Comments */}
                <section className={styles.comments_container}>
                    <aside
                        className={`
                    [ w-3/12 hidden py-6 px-8 ]
                    [ lg:block ]
                `}
                    ></aside>

                    {/* Comment Section */}
                    <section
                        className={`
                    [ w-full lg:w-6/12 order-2 ]
                    [ lg:order-2 ]
                `}
                    >
                        {success && (
                            <div className='py-rg px-rg flex items-center justify-center bg-success/20 rounded-smooth mb-6'>
                                <span className='text-success title'>
                                    Comment Posted Successfully, Your comment is under review to
                                    check if it contains any offensive content
                                </span>
                            </div>
                        )}

                        {/* Comments Box  */}
                        <CommentBox
                            onPostComment={handleSubmitComment}
                            onCommentChange={handleCommentChange}
                            value={comment}
                            status={{ loading, success, error }}
                        />
                        <h3 className='heading mt-9'>{[].length === 0 ? '' : 'Comments'}</h3>
                        <CommentsList comments={comments} />
                    </section>

                    {/* Tags Section */}
                    <aside
                        className={`
                    [ w-full order-1 py-6 ]
                    [ lg:order-3 lg:w-3/12 lg:px-md lg:py-0 ]
                `}
                    ></aside>
                </section>

                <section>
                    {/* get data using api */}
                    <p></p>
                </section>

                <Footer />
            </section>
        </>
    );
};

export async function getStaticProps({ params }) {
    const slug = params.slug;

    const post = getPostBySlug(slug, [
        'id',
        'title',
        'description',
        'metaTitle',
        'metaDescription',
        'ogTitle',
        'ogDescription',
        'ogImage',
        'content',
        'keywords',
        'mainButtonText',
        'mainButtonLink',
        'tags',
        'thumbnail',
    ]);

    const html = await markdownToHTML(post.content || '');

    const headlines = getHeadlines(html);
    const arrHeadlines = headlines.toString().split(',');

    const tocs = [];

    for (let i = 0; i < arrHeadlines.length; i++) {
        const h = parse(arrHeadlines[i]);
        let id = '';
        h.childNodes.forEach((val) => {
            id = val.id;
        });

        tocs.push({ id: id, text: h.textContent });
    }

    let comments = { data: [] };

    // Fetch Comments in Production only
    if (process.env.NODE_ENV === 'production') {
        try {
            const fecthedComments = await Comment.findAll({
                where: { post_id: post.id, is_approved: true },
                include: { model: User, as: 'user' },
                raw: true,
                nest: true,
            });
            comments = { data: JSON.stringify(fecthedComments) };
        } catch (e) {
            comments.data = [];
        }
    }

    const canonical = `https://www.miniorange.com/blog/${slug}/`;

    const payload = {
        comments: comments.data,
        post,
        html,
        tocs,
        canonical,
    };

    return {
        props: {
            payload: JSON.stringify(payload),
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
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
