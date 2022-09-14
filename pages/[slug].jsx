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
        thumbnail,
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
            <div
                id="main"
                className="flex flex-col items-center w-full py-8 lg:py-14 lg:flex-row border-b lg:px-40 px-6 gap-14"
            >
                <div className="w-full lg:w-6/12">
                    <h1 className="mt-6 lg:mt-0 display">{title}</h1>
                    <p className="body mt-6">{description}</p>
                    <button className="button primary mt-8">Get Demo</button>
                </div>
                <figure className="w-full aspect-cover lg:w-6/12 rounded-smooth overflow-hidden">
                    <img
                        src={thumbnail}
                        className="aspect-video object-cover"
                    />
                </figure>
            </div>
            <article className="flex flex-col justify-center lg:flex-row border-b">
                {/* Left Section */}
                <aside
                    className={`
                        [ w-3/12 hidden px-8 py-8 border-r ]
                        [ lg:block ]
                    `}
                >
                    <div className="hidden sticky top-headspace flex-col gap-1 lg:flex">
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
                                className="body font-semibold px-4 py-2"
                            >
                                {headline.text}
                            </a>
                        ))}
                    </div>
                </aside>

                {/* Blog Content */}
                <main
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                    className={`
                        [ ${markdownStyles["markdown"]} w-full [ lg:w-6/12 ] order-2 p-6 ]
                        [ lg:order-2 ]
                    `}
                ></main>

                {/* Right Section */}
                <aside
                    className={`
                        [ w-full order-1 py-8 px-6 border-l ]
                        [ lg:order-3 lg:w-3/12 lg:px-6 ]
                    `}
                >
                    <TagsList tags={tags} />
                </aside>
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
                ></aside>
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
        "thumbnail",
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
