import React from "react";
import IconButton from "components/icon-button";

export default function DialogHeader({ title, children, onClose }) {
    return (
        <div className="dialog-header">
            <span className="heading flex-1">{title}</span>
            {children}
            <IconButton icon="cross" onClick={onClose} />
        </div>
    );
}
