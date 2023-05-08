import React from 'react';

export default function TabItem({ id, title, active, onClick, className }) {
    const handleOnClick = () => {
        onClick(id);
    };
    return (
        <div
            className={`flex justify-center items-center px-rg py-rg border-b-thick cursor-pointer ${
                active ? 'border-accent' : 'border-transparent'
            } ${className}`}
            onClick={handleOnClick}
        >
            <h4 className='heading'>{title}</h4>
        </div>
    );
}
