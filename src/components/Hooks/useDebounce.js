import { useEffect, useState } from 'react';

function useDebounce(value, timeout) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handle = setTimeout(() => {
            setDebounceValue(value);
        }, timeout);

        return clearImmediate(handle);
    }, [value]);

    return debounceValue;
}

export default useDebounce;
