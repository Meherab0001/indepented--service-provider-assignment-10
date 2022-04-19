import React from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';


const ServiceInfo = () => {
    let {userId} = useParams();
 
    const allusr=useServices(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
    console.log(allusr)
    return (
        <div>
          <Service key={allusr.id} service={allusr}>
              {{email:allusr[0]?.email ,phone:allusr[0]?.phone}}
          </Service>
        </div>
    );
};

export default ServiceInfo;

