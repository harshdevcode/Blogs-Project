import React from 'react';

function CommentCard({ user, content }) {
    return (
        <li className='flex p-rg gap-rg'>
            <div className='w-14 h-14 bg-slate-100 rounded-full'></div>
            <section className='mt-xs flex-1'>
                <p className='title'>{user.name}</p>
                <p className='body'>{content}</p>
            </section>
        </li>
    );
}

export default CommentCard;
