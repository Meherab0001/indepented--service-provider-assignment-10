import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmpass: ''
    })
    const [confirmError,setConfirmError]=useState('')

    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        
        createError,
      ] = useCreateUserWithEmailAndPassword(auth);
    const handleFormInput = (event) => {

        userInfo[event.target.name] = event.target.value

    }
    const [user, loading, error] = useAuthState(auth);

    const handleSubmit = (event) => {
        event.preventDefault()
        if(userInfo.password !== userInfo.confirmpass){
            setConfirmError("password can't match")
            return;
        }
        else{
            setConfirmError('')
            createUserWithEmailAndPassword(userInfo.email,userInfo.password)
        }
      
    }
    let navigate = useNavigate();
    let location = useLocation();
   
  
    let from = location.state?.from?.pathname || "/";
    if(user){
      
        navigate(from);
    }

    return (
        <div>
            <div className='container'>
              
                <div className="p-4 max-w-sm w-full mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={handleSubmit} className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign Up</h5>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input onBlur={(event) => handleFormInput(event)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                            <input onBlur={(event) => handleFormInput(event)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                            <input onBlur={(event) => handleFormInput(event)} type="password" name="confirmpass" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label for="remember" className="font-medium text-gray-900 dark:text-gray-300">Check-Out me</label>
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register to your account</button>
                        <p className='text-red-600'>{confirmError}</p>
                        {
                                    createError && <p className='text-red-600'>{createError.message}</p>
                        }
                        {
                                  createUser && <p className='text-green-600'>User create successfully</p>
                        }
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Already registered? <Link to='/login' className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;