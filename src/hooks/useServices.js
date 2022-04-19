import  { useEffect, useState } from 'react';

const useServices = (url) => {
    const [services,setServices]=useState([])
    useEffect( ()=>{
        fetch(url)
        .then(res =>res.json())
        .then(data=>setServices(data))
    },[])
    return  services
       
    
};

export default useServices;