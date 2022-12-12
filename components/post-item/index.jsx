import Link from "next/link";

export default function PostItem({ post, className }) {
    return (
        <Link href={`/${post.slug}`}>
            <div
                className={`
                    ${className}
                    card h-[328px] flex flex-col duration-150 cursor-pointer overflow-hidden
                    lg:h-auto                                        
                `}
            >
                <div
                    className={`relative w-full grow bg-secondary-bg shadow-none`}
                >
                    <img
                        loading="lazy"
                        className="absolute w-full h-full top-0 right-0 bottom-0 left-0 object-cover"
                        src={`${post.thumbnail}`}
                        alt={post.slug}
                    />
                </div>

                <div className="p-medium">
                    <h4 className="title">{post.title}</h4>
                    <p className="mt-xsmall body">
                        {new Date(post.createdOn).toDateString()}{" "}
                    </p>
                </div>
            </div>
        </Link>
    );
}
