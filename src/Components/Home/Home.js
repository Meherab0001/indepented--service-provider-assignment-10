import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
 const data=  useServices('https://jsonplaceholder.typicode.com/users')
 if(data.length >4){
    data.length=4

 }



    return (
        <div className='container w-full mx-auto'>
            <Banner></Banner>
            <div className='w-full mt-5 justify-center items-center flex '>
                <Link className='ml-3 hover:text-amber-500 ' to='/family-law'>Family Law</Link>
                <Link className='ml-3 hover:text-amber-500 ' to='/bussiness-law'>Bussiness Law</Link>
                <Link className='ml-3 hover:text-amber-500 ' to='civil'>Civil Litigation</Link>
            </div>
           <div className='grid grid-cols-4 d-block  w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-3 xl:gap-32'>
               {
                   data?.map(service => <Service
                    key={data.id}
                    service={service}

                   ></Service>)
               }

           </div >
         <div className='p-5 mr-3 hover:text-yellow-300'>
       <button>
       <Link  to="services">See All...</Link>
       </button>
         </div>
        </div>
    );
};

export default Home;