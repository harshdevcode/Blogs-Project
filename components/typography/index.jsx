const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
};

export const Display = ({ children, className }) => {
    return <h2 className={`text-lg leading-relaxed font-semibold ${className}`}>{children}</h2>;
};

export const Heading = ({ children, className }) => {
    return <h3 className={`text-md leading-relaxed font-semibold ${className}`}>{children}</h3>;
};

export const Title = ({ weight = 'medium', children, className }) => {
    return (
        <h4 className={`${weights[weight]} ${className} text-base leading-relaxed`}>{children}</h4>
    );
};

export const Subtitle = ({ weight = 'normal', children, className }) => {
    return (
        <p
            className={`
                [ text-base leading-relaxed text-caption ]
                [ ${weights[weight]} ]
                ${className}
            `}
        >
            {children}
        </p>
    );
};
