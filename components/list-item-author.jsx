import Image from 'next/image';

const { Title, Subtitle } = require('./typography');

const Author = ({ name, profilePic }) => {
    return (
        <div className='flex items-center gap-5 px-10 py-5 mb-5'>
            <Image
                src={profilePic ? profilePic : '/blog/avatar-placeholder.png'}
                // src='/avatar-placeholder.png'
                width='50'
                height='50'
                alt=''
                className='rounded-full bg-secondary border'
            />
            <div className='flex flex-col gap-1'>
                <Subtitle>Author</Subtitle>
                <Title>{name ? name : 'miniOrange'}</Title>
            </div>
        </div>
    );
};

export default Author;
