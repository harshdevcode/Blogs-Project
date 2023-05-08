import { useEffect, useState } from "react";

export default function useStatus() {
    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: false,
    });

    useEffect(() => {
        if (status.success === true) {
            setTimeout(() => {
                setStatus({ loading: false, success: false, error: false });
            }, 3000);
        }
    }, [status]);

    return [status, setStatus];
}
