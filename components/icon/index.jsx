import icons from "./icons";

function Icon({ name }) {
    return (
        <svg width={34} height={34} fill="none" viewBox="0 0 24 24">
            <path d={icons[name]} fill="#28303F" />
        </svg>
    );
}

export default Icon;
