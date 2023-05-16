import React from "react";
import Icon from "components/icon";

export default function IconButton({ icon, onClick, size = "regular", className }) {
    return (
        <span className={`icon-button ${size} secondary ${className}`} onClick={onClick}>
            <Icon
                name={icon}
                size={size === "small" ? "w-icon-sm h-icon-sm" : "w-icon-rg h-icon-rg"}
                className="cursor-inherit"
            />
        </span>
    );
}
