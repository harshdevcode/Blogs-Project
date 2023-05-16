import React from 'react';
import CommentCard from 'components/comment-card';

function CommentsList({ comments }) {
    return (
        <ul className='mt-rg flex flex-col gap-sm'>
            {comments.length !== 0 &&
                comments.map((comment) => <CommentCard key={comment.id} {...comment} />)}
        </ul>
    );
}

export default CommentsList;
