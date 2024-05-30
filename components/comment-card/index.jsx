import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function CommentCard({ user, content , icon_color }) {
    return (
        <li className='flex p-rg gap-rg bg-primary rounded border'>
            <div className='w-14 h-14 bg-slate-200 rounded-full'>
                <AccountCircleIcon style={{color: icon_color, opacity: 0.5, width: "3.5rem", height: "3.5rem"}}/>
            </div>
            <section className='mt-xs flex-1'>
                <p className='title'>{user.name}</p>
                <p className='body'>{content}</p>
            </section>
        </li>
    );
}

export default CommentCard;
