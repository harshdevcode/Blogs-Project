import React, { useState, useEffect } from 'react';
import CommentCard from 'components/comment-card';

const colors = ['red', 'blue', 'green', 'purple', 'black']; 

function CommentsList({ comments }) {
    const [commentColors, setCommentColors] = useState({});

    useEffect(() => {
        const initialColors = {};
        comments.forEach(comment => {
            initialColors[comment.id] = getRandomColor();
        });
        setCommentColors(initialColors);
    }, []);

    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    return (
        <ul className='mt-rg flex flex-col gap-sm'>
            {comments.length !== 0 &&
                comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        {...comment}
                        icon_color={commentColors[comment.id]}
                    />
                ))}
        </ul>
    );
}

export default CommentsList;
