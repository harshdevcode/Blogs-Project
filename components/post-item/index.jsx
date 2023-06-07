import Image from 'next/image';
import Link from 'next/link';

export default function PostItem({
    slug,
    title,
    description,
    thumbnail,
    thumbnailLoading = 'lazy',
    createdOn,
    className,
    index,
}) {
    return (
        <Link
            href={`/${slug}`}
            className={`
                    ${className}
                    card flex flex-col duration-150 cursor-pointer overflow-hidden                                      
                `}
        >
            <div className='relative w-full h-0 pb-[55%]'>
                <Image
                    className='absolute inset-0 object-cover w-full h-full'
                    src={thumbnail}
                    alt={slug}
                    fill
                    loading={thumbnailLoading}
                />
            </div>

            <div className='p-md'>
                <h4 className='title-semibold'>{title}</h4>
                <p className={`mt-xs caption truncate`}>{description}</p>
            </div>
        </Link>
    );
}
