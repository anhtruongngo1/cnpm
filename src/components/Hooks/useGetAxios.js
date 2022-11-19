import axios from 'axios';
import { useEffect, useState } from 'react';

function useGetAxios(url) {
    // const [value, setValue] = useState([]);
    // useEffect(() => {
    //     const get = async () => {
    //         const res = await axios.get(url);
    //         setValue(res.data);
    //     };
    //     get();
    // }, []);
    // return value;
}

export default useGetAxios;
