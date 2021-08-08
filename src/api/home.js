import { useEffect, useState } from 'react';
import axios from 'axios';

const GetData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                'https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false'
            )
            .then(({ data }) => setData(data));
    }, []);
    return data;
};

export default GetData;
