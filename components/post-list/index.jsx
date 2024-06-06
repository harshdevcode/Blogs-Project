import Icon from 'components/lucide-icon';
import { Subtitle, Title } from 'components/typography';
import { capitalizeFirstLetter } from 'helpers/string';
import Link from 'next/link';

function PostList({ post, index }) {
    return (
        <Link
            key={index}
            href={`/${post?.slug}`}
            className='card flex flex-col duration-150 cursor-pointer mt-4 '
        >
            <div className="py-4 px-8">
                <Title weight="semibold" className="line-clamp-2">
                    {post.title}
                </Title>
                <Subtitle className={`mt-xs caption truncate`}>{post.description}</Subtitle>
                <div className="flex items-center gap-2.5 mt-5">
                    <Icon name="Clock" color="grey" size={18} />
                    <Subtitle className="grow">{new Date(post.createdOn).toDateString()}</Subtitle>
                    <Icon name="FolderClosed" color="grey" size={18} />
                    <div className="flex flex-wrap items-center">
                        {post.category.map((_category, i) => (
                            <li key={`${post.slug}-${i}`}>
                                <Subtitle>{capitalizeFirstLetter(_category)}</Subtitle>
                                {i !== post.category.length - 1 ? <>, &nbsp;</> : null}
                            </li>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default PostList;
