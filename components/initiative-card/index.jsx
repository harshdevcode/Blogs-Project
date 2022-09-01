import React from "react";

function InitiativeCard({ initiative, className }) {
    return (
        <div
            className={`
                [ h-full flex flex-col p-6 ]
                [ ${className} ] 
            `}
        >
            {/* <div className="h-[150px]"></div> */}
            <h4 className="heading">{initiative.title}</h4>
            <p className="mt-2 body text-white">{initiative.description}</p>
            <div className="grow"></div>
            <button className="button secondary mt-6 w-max">Join us</button>
        </div>
    );
}

export default InitiativeCard;
