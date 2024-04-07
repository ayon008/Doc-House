import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const useFetch = (url) => {
    const { isPending, error, data } = useQuery({
        queryKey: ['reviews'],
        queryFn: () =>
            axios.get(url)
                .then(response => {
                    return response.data;
                })
    })
    return { isPending, error, data }
};

export default useFetch;