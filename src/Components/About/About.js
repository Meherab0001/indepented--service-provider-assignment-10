import React from 'react';
import img from './FB_IMG_16408773100019239.jpg'
const About = () => {
    return (
        <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32 mt-5'>
            <div className='w-full'><img src={img} alt="" /></div>
            <div>
                <p>This Meherab Hossain.<br></br>
                    I am student of Physics Department in Govt. Titumir College.
                    <br></br>
                    My passion and dream I wanna be a programmer.
                    For this reason to start pHero journey and i try to best for me.

                    </p>
            </div>
        </div>
    );
};

export default About;