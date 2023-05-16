import React from 'react';
import Button from 'components/button';

function CommentBox({ value, onCommentChange, onPostComment, status }) {
    return (
        <div className='flex flex-col gap-rg'>
            <div
                className={`
                    [ flex flex-col gap-rg ]
                    [ sm:flex-row ]
                `}
            >
                <input
                    disabled={status.loading === true}
                    value={value.name}
                    onChange={onCommentChange}
                    type='text'
                    name='name'
                    className='input flex-1'
                    placeholder='Full Name'
                />
                <input
                    disabled={status.loading === true}
                    value={value.email}
                    onChange={onCommentChange}
                    type='email'
                    name='email'
                    className='input flex-1'
                    placeholder='Email Address'
                />
            </div>
            <textarea
                disabled={status.loading === true}
                value={value.content}
                onChange={onCommentChange}
                name='content'
                placeholder='Write your comment here'
                className='textarea h-[150px]'
            />
            <Button
                className='w-max self-end'
                text='Post Comment'
                onClick={onPostComment}
                status={status}
                loadingText='Posting'
                successText='Posted'
                errorText='Try Again'
            />
        </div>
    );
}

export default CommentBox;
