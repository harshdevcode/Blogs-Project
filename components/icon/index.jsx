import * as React from 'react';
import icons from './icons';

const Icon = ({
    name = '',
    className = '',
    type = 'line',
    size = 'w-icon-rg h-icon-rg',
    fill = 'fill-gray-800',
    onclick,
}) => {
    return (
        <svg
            onClick={onclick}
            className={`${className} ${fill} ${size} ${onclick && 'cursor-pointer'}`}
            viewBox='0 0 24 24'
            fill='none'
            fillRule='evenodd'
            clipRule='evenodd'
        >
            <path fillRule='evenodd' clipRule='evenodd' d={icons[type][name]} fill={fill} />
        </svg>
    );
};

export default Icon;
