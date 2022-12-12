import Link from "next/link";

export default function PostItem({ post, className }) {
    return (
        <Link href={`/${post.slug}`}>
            <div
                className={`
                    ${className}
                    outline outline-1 outline-slate-200 shadow-none
                    flex flex-col duration-150 cursor-pointer bg-white rounded-smooth overflow-hidden
                    hover:shadow-md hover:shadow-slate-200
                    lg:h-auto                                        
                `}
            >
                <div className={`relative w-full grow bg-slate-100`}>
                    <img
                        loading="lazy"
                        className="absolute w-full h-full top-0 right-0 bottom-0 left-0 object-cover"
                        src={`${post.thumbnail}`}
                        alt={post.slug}
                    />
                </div>

                <div className="px-6 py-6 h-[136px] flex flex-col">
                    <h4 className="title">{post.title}</h4>
                    <p className="mt-2 body">
                        {new Date(post.createdOn).toDateString()}{" "}
                    </p>
                </div>
            </div>
        </Link>
    );
}
