import React from 'react';

const Blog = () => {
    return (
        <div>
            <section>
                <h1 className='text-2xl text-blue-400'>1. Difference between `authorization` and `authentication`?</h1>
                <p><span className='text-xl font-semibold'>Answer:</span>
                Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.<br></br>
                <br></br>
                Authorization is the process of giving someone the ability to access a resource.
                <br></br>
                <br></br>
                Authentication enables organizations to keep their networks secure by permitting only authenticated users or processes to gain access to their protected resources
                
                
                </p>
            </section>
            <section>
                <h2 className='text-2xl text-blue-400'>2. Why are you using `firebase`? What other options do you have to implement authentication?</h2>
                <p><span className='text-xl font-semibold'>Answer:</span>
                Firebase is great for quick projects: it's easy to set up, fast, in many cases requires only front-end logic. It lets you focus on your app instead of implementing custom authentication, web sockets or database connections.
                <br></br>
                <br></br>
                Authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                </p>
            </section>
            <section>
                <h2 className='text-2xl text-blue-400'>3. What other services does `firebase` provide other than authentication?
                </h2>
                <p><span className='text-xl font-semibold'>Answer:</span>
                Yes,Firebase alos provide Realtime database,Hosting,Test tab,Notifications.
                
                </p>
                </section>
        </div>
    );
};

export default Blog;