import { Subtitle, Title } from 'components/typography';
import React from 'react';

function InitiativeCard({ initiative, className }) {
    return (
        <div
            className={`
                [ ${className} ] 
                [ h-full flex flex-col p-rg rounded-smooth ]
            `}
        >
            <Title>{initiative.title}</Title>
            <Subtitle>{initiative.description}</Subtitle>
            <div className="grow"></div>
            <button className="button secondary mt-rg w-max">Join us</button>
        </div>
    );
}

export default InitiativeCard;
