import React from 'react';

function InitiativeCard({ initiative, className }) {
    return (
        <div
            className={`
                [ ${className} ] 
                [ h-full flex flex-col p-rg rounded-smooth ]
            `}
        >
            <h4 className='heading'>{initiative.title}</h4>
            <p className='mt-small body text-white'>{initiative.description}</p>
            <div className='grow'></div>
            <button className='button secondary mt-rg w-max'>Join us</button>
        </div>
    );
}

export default InitiativeCard;
