import React from "react";
import IconButton from "components/icon-button";

export default function SocialIcon({ href, icon }) {
    const onClick = () => {
        window.location.href = href;
    };
    return <IconButton icon={icon} onClick={onClick} />;
}
