import { useState, useEffect } from "react";

const useFetch = (url) => {
const [data , setData] = useState(null);
const [ispending ,setispending] = useState(true);
const [error , seterror] = useState(null);
 useEffect(() => {
     const abortCont = new  AbortController();
    fetch(url , {signal: abortCont.signal})
    .then(res => {
        if(!res.ok){
            throw Error("Could not Fetch the data for this request");
        }
        return res.json();
    })
    .then(data => {
        setData(data)
        setispending(false)
        seterror(null)
    })
    .catch(err => {
        if(err === "AbortError"){
            console.log("Fetch Aborted");
        } else {
        seterror(err.message)
        setispending(false)
        }
    });
    return () => abortCont.abort();
 }, [url]);

 return {data, ispending, error};
}

export default useFetch;