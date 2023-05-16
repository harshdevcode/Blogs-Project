import ResourceCard from 'components/resource-card';
import React from 'react';

export default function ResourceList({ data }) {
    return (
        <div className='grid grid-cols-primary gap-rg'>
            {data.map((item, index) => (
                <ResourceCard {...item} key={index} />
            ))}
        </div>
    );
}
