
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    const data = useServices('https://raw.githubusercontent.com/Meherab0001/fakedata/main/fakedata.json')
    if (data.length > 4) {
        data.length = 4

    }



    return (
        <div className='container w-full mx-auto'>
            <Banner></Banner>
         <div className='flex d-block mt-5 justify-center '>
             <h3 className='p-2 hover:text-orange-600 text-xl font-semibold'>Family  Law</h3>
             <h3 className='p-2 hover:text-orange-600 text-xl font-semibold'>Bussiness  Law</h3>
             <h3 className='p-2 hover:text-orange-600 text-xl font-semibold'>Civil  Law</h3>
         </div>
            <div className='grid grid-cols-3 sm:grid-cols-1 d-block  w-fullgap-10 mx-auto md:w-4/5 lg:grid-cols-3 xl:gap-32'>
                {
                    data?.map(service => <Service
                        key={data.id}
                        service={service}

                    ></Service>)
                }

            </div >
            <div className='p-5 mr-3 ml-3 hover:text-yellow-300'>
             
                    <Link to="/services">See All...</Link>
               
            </div>
        </div>
    );
};

export default Home;