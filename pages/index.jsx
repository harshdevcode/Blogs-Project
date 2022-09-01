/*
------------------------------------------------------
    Blog Site Homepage - 
    This Page will be displayed when user
    hit https://www.miniorange.com/blogs
------------------------------------------------------
*/

import CategoryCard from "../components/category-card";
import InitiativeCard from "../components/initiative-card";
import PostItem from "../components/post-item";
import PostSnippet from "../components/post-snippet";
import { getCategories, getPostsForCategory } from "../helpers/helpers";

export default function Home({ featuredPosts, latestPosts, categories }) {
    return (
        <div
            className={`
                [ w-full h-full px-4 py-4 pt-[107px] bg-slate-50 ]
                [ xl:px-[150px] ]
            `}
        >
            {/* Main Grid */}
            <div
                className={`
                    [ w-full grid grid-cols-3 gap-4 ]
                    [ md:grid-rows-2 ]
                `}
            >
                <PostItem
                    post={featuredPosts[0]}
                    className={`
                        [ h-[328px] border border-slate-300 col-span-3 ]
                        [ md:col-span-2 md:h-auto md:row-span-2 ]
                    `}
                />
                <PostSnippet
                    post={featuredPosts[1]}
                    className={`
                        [ border border-slate-300 col-span-3 ]
                        [ md:col-start-3 md:col-end-3 md:row-start-1 md:row-end-1 ]
                    `}
                />
                <PostSnippet
                    post={featuredPosts[1]}
                    className={`
                        [ border border-slate-300 col-span-3 ]
                        [ md:col-start-3 md:col-end-3 md:row-start-2 md:row-end-2 ]
                    `}
                />
            </div>

            <h4 className="mt-14 mb-4 heading">Latest Posts</h4>

            {/* Latest Posts */}
            {latestPosts.length !== 0 && (
                <div
                    className={`
                        [ w-full grid grid-cols-3 gap-4 ]
                    `}
                >
                    <PostItem
                        post={latestPosts[0]}
                        className={`
                            [ h-[328px] col-start-1 col-end-4 ]
                            [ md:col-start-1 md:col-end-2 md:row-end-1 ]
                            [ lg:col-start-1 lg:col-end-1 lg:row-start-1 lg:row-end-1 lg:h-auto ]
                        `}
                    />
                    <PostItem
                        post={latestPosts[1]}
                        className={`
                            [ h-[328px] col-start-1 col-end-4 ]
                            [ md:col-start-2 md:col-end-4 md:row-end-1 ]
                            [ lg:col-start-1 lg:col-end-1 lg:row-start-2 lg:row-end-2 lg:h-auto ]
                        `}
                    />
                    <PostItem
                        post={latestPosts[2]}
                        className={`
                            [ h-[328px] col-start-1 col-end-4 row-start-1 row-end-2 ]
                            [ md:col-start-1 md:col-end-3 md:row-end-2 ]
                            [ lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-3 ]
                        `}
                    />
                    <PostItem
                        post={latestPosts[3]}
                        className={`
                            [ h-[328px] col-start-1 col-end-4 ]
                            [ md:col-start-3 md:col-end-4 md:row-end-2 ]
                            [ lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3 ]
                        `}
                    />
                </div>
            )}

            {/* Categories */}
            <h4 className="mt-14 mb-4 heading">More Topics</h4>

            <div className="w-full grid grid-cols-categories gap-4">
                {categories.map((category, index) => {
                    return <CategoryCard key={index} category={category} />;
                })}
            </div>

            {/* Initiatives */}
            <h4 className="mt-14 mb-4 heading">Initiatives</h4>

            <div className="grid grid-cols-primary gap-4">
                <InitiativeCard
                    initiative={{
                        title: "Guest Authors",
                        description:
                            "Write for Auth0's blog and become a part of one of the most popular technical blogs in the world.",
                    }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                />
                <InitiativeCard
                    initiative={{
                        title: "Ambassadors Program",
                        description:
                            "Do you want to empower the developer community, make the internet safer, and build your own brand while you're at it?",
                    }}
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
                />
                <InitiativeCard
                    initiative={{
                        title: "Auth0 Community",
                        description:
                            "Interact with other developers implementing innovative solutions with Auth0.",
                    }}
                    className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white"
                />
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const latestPosts = getPostsForCategory(
        [
            "title",
            "description",
            "date",
            "slug",
            "author",
            "thumbnail",
            "excerpt",
            "content",
            "category",
            "createdOn",
        ],
        "latest"
    );

    const featuredPosts = getPostsForCategory(
        [
            "title",
            "description",
            "date",
            "slug",
            "author",
            "thumbnail",
            "excerpt",
            "content",
            "category",
            "createdOn",
        ],
        "featured"
    );

    const categories = getCategories();

    return {
        props: {
            featuredPosts,
            latestPosts,
            categories: JSON.parse(categories),
        },
    };
}
