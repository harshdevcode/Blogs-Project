import Head from "next/head";
import CommentBox from "../components/comment-box";
import CommentsList from "../components/comments-list";
import Footer from "../components/footer";
import TagsList from "../components/tags-list";
import {
    getAllPosts,
    getHeadlines,
    getPostBySlug,
    markdownToHTML,
} from "../helpers/helpers";
import { parse } from "node-html-parser";
import markdownStyles from "./markdown-styles.module.css";

const Blog = ({
    post: {
        title,
        description,
        ogTitle,
        ogDescription,
        ogImage,
        htmlContent,
        tags,
        keywords,
        headlines,
    },
}) => {
    return (
        <section
            className={`
                [ w-full h-full mt-header bg-white ]
            `}
        >
            {/* Head */}
            <Head>
                {/* SEO Meta Tags */}
                <title>{title}</title>
                <meta
                    property="description"
                    content={description}
                    key="description"
                />
                <meta property="keywords" content={keywords} key="keywords" />

                {/* Open Graph Tags */}
                <meta property="og:title" content={ogTitle} key="ogTitle" />
                <meta
                    property="og:description"
                    content={ogDescription}
                    key="ogDescription"
                />
                <meta property="og:image" content={ogImage} key="ogImage" />
            </Head>

            {/* Content */}
            <article className="flex justify-center">
                {/* Left Section */}
                <aside
                    className={`
                        [ w-3/12 hidden py-6 px-8 ]
                        [ lg:block ]
                    `}
                >
                    <div className="sticky top-headspace py-6 flex flex-col gap-2">
                        <a
                            href={`#main`}
                            className="body font-semibold bg-slate-100 rounded-smooth px-4 py-2"
                        >
                            Introduction
                        </a>
                        {headlines.map((headline) => (
                            <a
                                key={headline.id}
                                href={`#${headline.id}`}
                                className="body font-semibold  px-4 py-2"
                            >
                                {headline.text}
                            </a>
                        ))}
                    </div>
                </aside>

                {/* Blog Content */}
                <main
                    id="main"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                    className={`${markdownStyles["markdown"]} w-full [ lg:w-6/12 ] p-6`}
                />

                {/* Right Section */}
                <aside
                    className={`
                        [ w-3/12 hidden ]
                        [ lg:block ]
                    `}
                ></aside>
            </article>

            {/* Comments */}
            <section
                className={`
                    [ w-full flex flex-col justify-center p-6 ]
                    [ lg:flex-row ]
                `}
            >
                <aside
                    className={`
                        [ w-3/12 hidden py-6 px-8 ]
                        [ lg:block ]
                    `}
                ></aside>

                {/* Comment Section */}
                <section
                    className={`
                        [ w-full [ lg:w-6/12 ] order-2 ]
                        [ lg:order-2 ]
                    `}
                >
                    <CommentBox />
                    <h5 className="title mt-9">Recent Comments</h5>
                    <CommentsList />
                </section>

                {/* Tags Section */}
                <aside
                    className={`
                        [ w-full order-1 py-6 ]
                        [ lg:order-3 lg:w-3/12 lg:px-6 lg:py-0 ]
                    `}
                >
                    <TagsList tags={tags} />
                </aside>
            </section>
            <Footer />
        </section>
    );
};

export async function getStaticProps({ params }) {
    const slug = params.slug;

    const post = getPostBySlug(slug, [
        "title",
        "description",
        "ogTitle",
        "ogDescription",
        "ogImage",
        "content",
        "keywords",
        "tags",
    ]);

    const htmlContent = await markdownToHTML(post.content || "");

    const headlines = getHeadlines(htmlContent);
    const arrHeadlines = headlines.toString().split(",");

    const headlinesObj = [];

    for (let i = 0; i < arrHeadlines.length; i++) {
        const h = parse(arrHeadlines[i]);
        let id = "";
        h.childNodes.forEach((val) => {
            id = val.id;
        });

        headlinesObj.push({ id: id, text: h.textContent });
    }

    return {
        props: {
            post: {
                ...post,
                htmlContent,
                headlines: headlinesObj,
            },
        },
    };
}

export function getStaticPaths() {
    const posts = getAllPosts(["slug"]);
    return {
        paths: posts.map((post) => {
            return { params: { slug: post.slug } };
        }),
        fallback: false,
    };
}

export default Blog;
