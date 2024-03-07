import React, { useEffect, useState } from 'react';
import './Login.css';
import Header from '../Header';
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from '../../GoogleSignin/config.jsx';
import { signInWithPopup } from 'firebase/auth';
import { data } from 'autoprefixer';
import Homepage from '../Homepage';

function Login() {

    const [value, setValue] = useState('');

    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: ''
    })

    function handleSubmit(event) {
        event.preventDefault();

        console.log(enteredValues);

        setEnteredValues({
            email: '',
            password: ''
        });

    }

    const handleSignUp = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem("email", data.user.email);
        })
    }

    function handleInputChange(identifier, value) {
        setEnteredValues(prevValues => ({
            ...prevValues,
            [identifier]: value
        }))
    }

    return (<div className="" >
        {value ? <Homepage /> : (
            <>
                <Header />
                <div className='flex flex-row items-center h-screen justify-center'>
                    <form className=' border-black text-white my-auto px-7 py-6 w-full md:w-2/3 justify-center rounded-lg' onSubmit={handleSubmit}>
                        <h2 className='text-white text-center uppercase font-semibold text-4xl py-6'>Login</h2>
                        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                            <div className="flex flex-col">
                                <label htmlFor="email" className='font-medium'>Email</label>
                                <input
                                    className='border-solid border-cyan-50 border-[2px] py-2 px-4 focus:outline-none focus:border-cyan-300'
                                    id="email"
                                    type="email"
                                    name="email"
                                    onChange={(event) => handleInputChange('email', event.target.value)}
                                    value={enteredValues.email}
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="password" className='font-medium'>Password</label>
                                <input
                                    className='border-solid border-cyan-50 border-[2px] py-2 px-4 focus:outline-none bg-transparent focus:border-cyan-300'
                                    id="password"
                                    type="password"
                                    name="password"
                                    onChange={(event) => handleInputChange('password', event.target.value)}
                                    value={enteredValues.password}
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>

                        <p className="">
                            <div className='flex justify-center mt-6 gap-6'>
                                <button className="ntt-login-button" type='reset'>Reset</button>
                                <button className="ntt-login-button">Login</button>
                            </div>

                            <div className='flex justify-center my-6'>
                                <div className='flex justify-center align-middle gap-3 
                        bg-cyan-500 py-4 px-5 text-fuchsia-50 
                        hover:bg-cyan-300 rounded-lg font-semibold cursor-pointer'  onClick={handleSignUp}>
                                    <FcGoogle className='bg-transparent w-6 h-6' /> Signin with Google
                                </div>
                            </div>
                        </p>
                    </form>
                </div>
            </>)}
    </div>
    )
}

export default Login