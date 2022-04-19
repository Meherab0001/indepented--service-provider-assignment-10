import React from 'react';

const Footer = () => {
    return (
        <div className='container mx-auto w-full'>

            <footer   class="p-4 mt-5 container mx-auto w-full sticky bottom-0 bg-black rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" class="hover:underline">Lawyer</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </footer>

        </div>
    );
};

export default Footer;