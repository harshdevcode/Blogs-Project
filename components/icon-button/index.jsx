import React from "react";
import Icon from "../icon";

function IconButton({ iconName, onClick, className }) {
    return (
        <div
            className={`
                    [ border rounded-full cursor-pointer duration-150 ]
					[ hover:bg-slate-100 ]					
					[ ${className} ]
                `}
            onClick={onClick}
        >
            <Icon name={iconName} />
        </div>
    );
}

export default IconButton;
