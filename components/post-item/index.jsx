import Icon from 'components/lucide-icon';
import { Subtitle, Title } from 'components/typography';
import { capitalizeFirstLetter } from 'helpers/string';
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
    category,
    index,
    blogBannerTitle
}) {
    return (
        <Link
            href={`/${slug}`}
            className={`
                ${className}
                 card flex flex-col duration-150 cursor-pointer overflow-hidden                                    
            `}
        >
            <div className="aspect-video relative">
                <Image
                    className="object-cover"
                    src={thumbnail}
                    alt={slug}
                    fill
                    loading={thumbnailLoading}
                />
            </div>

            <div className="p-8">
                <Title weight="semibold" className={`line-clamp-2 ${blogBannerTitle && 'blogBannerTitle'}`}>
                    {title}
                </Title>
                <Subtitle className={`mt-xs caption truncate ${blogBannerTitle && 'blogBannerDesc'}`}>{description}</Subtitle>
                <div className="flex items-center gap-2.5 mt-5">
                    <Icon name="Clock" color="grey" size={18} />
                    <Subtitle className="grow">{new Date(createdOn).toDateString()}</Subtitle>
                    <Icon name="FolderClosed" color="grey" size={18} />
                    <div className="flex flex-wrap items-center">
                        {category.map((_category, i) => (
                            <>
                                <Subtitle>{capitalizeFirstLetter(_category)}</Subtitle>
                                {i !== category.length - 1 ? <>, &nbsp;</> : null}
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
