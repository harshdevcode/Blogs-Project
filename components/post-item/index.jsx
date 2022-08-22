import Image from 'next/image';

export function PostItem({
    post: {
        title,
        author: { name: authorName },
        thumbnail,
    },
}) {
    return (
        <div className='flex flex-col gap-1'>
            <Image src={thumbnail} />
            <h3>{title}</h3>
            <p>{authorName}</p>
        </div>
    );
}
