import { useRouter } from "next/router";
import React from "react";
import Footer from "../../components/footer";
import PostItem from "../../components/post-item";
import { getTag, getPostsForTag } from "../../helpers/helpers";
import { capitalizeFirstLetter } from "../../helpers/string";

export default function Tag({ posts }) {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <div>
      <div
        className={`
                [ w-full h-full px-4 py-4 pt-[107px] bg-slate-50 ]
                [ xl:px-[150px] ]
            `}
      >
        <div className="heading">{capitalizeFirstLetter(tag)}</div>

        <div className="mt-8 grid grid-cols-primary auto-rows-[328px] gap-4">
          {posts.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { tag } = params;

  const posts = getPostsForTag(
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
      "tags",
      "createdOn",
    ],
    tag
  );

  return {
    props: {
      posts: posts,
    },
  };
}

export async function getStaticPaths() {
  // Get Blogs for Category
  const tags = JSON.parse(getTag());

  return {
    paths: tags.map((tag) => {
      return { params: { tag: tag.title.toLowerCase() } };
    }),
    fallback: "blocking",
  };
}
