import { useEffect, useState } from 'react';
import axios from 'axios';

function GetData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                'https://unstats.un.org/SDGAPI/v1/sdg/Goal/13/Target/List?includechildren=true'
            )
            .then(response => {
                setData(response.data);
            });
    }, []);
    return data;
}

export default GetData;
