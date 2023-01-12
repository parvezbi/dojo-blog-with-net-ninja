import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setError] = useState(null);
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(res =>{
                if(!res.ok){
                    throw Error('Could not fetch the data for resource!');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err =>{
                setIsPending(false);
                setError(err.message);
            })
        }, 1000);
    },[url]);
    return { data, isPending, isError }
}

export default useFetch