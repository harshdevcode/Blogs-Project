import React from 'react';
import Spinner from 'components/spinner';

export default function Button({
    status = { loading: false, success: false, error: false },
    variant = 'primary',
    loadingText,
    text,
    successText,
    errorText,
    onClick,
    className,
}) {
    return (
        <button
            disabled={status.loading}
            className={`
                [ ${className} ]
                [ button ${status.success ? 'success' : status.error ? 'danger' : variant} ]
            `}
            onClick={onClick}
        >
            <span className='flex-1 text-center pr-sm text-inherit'>
                {status.loading
                    ? loadingText
                    : status.success
                    ? successText
                    : status.error
                    ? errorText
                    : text}
            </span>
            {status.loading && (
                <Spinner color={`${variant === 'primary' ? 'text-white' : 'text-color-title'}`} />
            )}
        </button>
    );
}
