export default function FeaturedPostItem({ post, className }) {
    return (
        <div
            className={`
                flex flex-col duration-150 cursor-pointer bg-white border border-slate-300
                hover:shadow-md
                ${className}
            `}
        >
            <div className={`relative w-full grow bg-slate-100 shadow-none`}>
                <img
                    className="absolute w-full h-full top-0 right-0 bottom-0 left-0 object-cover"
                    src={`${post.thumbnail}`}
                />
            </div>

            <div className="p-6">
                <h4 className="title">{post.title}</h4>
                <p className="mt-2 body">
                    Published on
                    <span className="font-semibold">
                        {" "}
                        {new Date(post.createdOn).toDateString()}{" "}
                    </span>
                    by
                    <span className="font-semibold"> {post.author.name} </span>
                </p>
            </div>
        </div>
    );
}
