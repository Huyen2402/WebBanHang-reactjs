import {React, useState,useEffect} from "react";

export default function useData (url) {
    
    const [state, setState] = useState();
  
    useEffect(() => {
      const dataFetch = async () => {
        const data = await (await fetch(url)).json();
  
        setState(data);
       
      };
  
      dataFetch();
    }, [url]);
  
    return [state];
  };
export  function ComponentDidMount(url, body) {
    const [state, setState] = useState();
  const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };
    useEffect(() => {
      const dataFetch = async () => {
        
        const data = await (await fetch(url,requestOptions)).json();
  
        setState(data);
        
        
       
      };
  
      dataFetch();
    }, [state]);
  
    return [state];
    // Simple POST request with a JSON body using fetch
    
}