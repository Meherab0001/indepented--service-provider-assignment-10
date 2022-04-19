import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';




const Services = () => {

const allData=useServices('https://raw.githubusercontent.com/Meherab0001/fakedata/main/fakedata.json')
console.log(allData)
    return (
        <div className='container grid grid-cols-4 d-block w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-3 xl:gap-32'>
          {
              allData?.map(service => <Service key={service.id} service={service}></Service>)
          }
        </div>
    );
};

export default Services;