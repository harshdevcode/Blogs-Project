/*
------------------------------------------------------
    Blog Site Homepage - 
    This Page will be displayed when user
    hit https://www.miniorange.com/blogs
------------------------------------------------------
*/

import CategoryCard from "../components/category-card";
import Footer from "../components/footer";
import InitiativeCard from "../components/initiative-card";
import PostItem from "../components/post-item";

import {
    getAllPosts,
    getCategories,
    getPostsForCategory,
} from "../helpers/helpers";

export default function Home({ featuredPosts, latestPosts, categories }) {
    return (
        <>
            <main
                className={`
                [ w-full h-full px-4 py-4 pt-[107px] bg-slate-50 ]
                [ xl:px-[150px] ]
            `}
            >
                {/* Featured Postss */}
                <div className="featured-posts-grid">
                    {featuredPosts.map((post, index) => (
                        <PostItem
                            post={post}
                            className={`fp${index}`}
                            key={post.slug}
                        />
                    ))}
                </div>

                <h4 className="mt-14 mb-4 heading">Latest Posts</h4>

                {/* Latest Posts */}
                {latestPosts.length !== 0 && (
                    <div className="latest-posts-grid">
                        {latestPosts.map((post, index) => (
                            <PostItem
                                post={post}
                                className={`lp${index}`}
                                key={post.slug}
                            />
                        ))}
                    </div>
                )}

                {/* Categories */}
                <section>
                    <h4 className="mt-14 mb-4 heading">More Topics</h4>
                    <ul className="w-full grid grid-cols-categories gap-4">
                        {categories.map((category, index) => {
                            return (
                                <CategoryCard key={index} category={category} />
                            );
                        })}
                    </ul>
                </section>

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
            </main>
            <Footer />
        </>
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

    const allPosts = getAllPosts([
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
    ]);

    const categories = getCategories();

    return {
        props: {
            featuredPosts,
            latestPosts,
            categories: JSON.parse(categories),
            allPosts,
        },
    };
}
