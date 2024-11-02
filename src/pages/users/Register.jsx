import React, { useState } from 'react'
import Navbar from '../../components/user/Navbar'
import Footer from '../../components/user/Footer'
import Image from '../../assets/user/auth.jpeg'
import { Link } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
  return (
    <div className='h-screen w-screen'>
        <Navbar />
        <div className='grid grid-cols-2 items-center gap-4'>
            <div className='w- h-full flex relative'>
                <img src={Image} alt="" className='w-full bg-cover h-full'/>
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity`}></div>
                <div className='absolute top-52 right-0 flex items-center flex-col gap-6 text-xl'>
                    <Link to='/login' className='flex font-semibold text-white'>
                        Sign In
                    </Link>
                    <Link to='/register' className='flex font-semibold bg-white text-blue-600 py-3 px-6 rounded-l-3xl'>
                        Register
                    </Link>
                </div>
            </div>
            <div className='flex items-center justify-center flex-col gap-6 xl:gap-8'>
                <div className='flex flex-col gap-0 items-center xl:mb-6'>
                    <h1 className='text-blue-600 text-4xl font-bold'>TravelTrekz</h1>
                    <p>Create an account with TravelTrekz</p>
                </div>
                <form action="" className='flex flex-col gap-8 xl:gap-10 w-full px-20 '>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        placeholder='Full Name' 
                        className='text-xl outline-none border-b w-full focus:border-b-blue-600'
                    />
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        placeholder='Email' 
                        className='text-xl outline-none border-b w-full focus:border-b-blue-600'
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        placeholder='Password' 
                        className='text-xl outline-none border-b w-full focus:border-b-blue-600'
                    />
                    <div className='flex items-center gap-2'>
                        <input 
                            type="checkbox" 
                            className='w-5 h-5 cursor-pointer' 
                            required
                        />
                        <p className=''>I have read, understood and agreed to all <span className='text-blue-600 cursor-pointer'>terms</span> and <span className='text-blue-600 cursor-pointer'>condition</span>.</p>
                    </div>
                    <div className=' text-white flex items-center justify-end w-full'>
                        <button 
                            onClick={handleSubmit} 
                            className='bg-blue-600 w-fit px-4 py-2 text-lg  rounded-2xl font-semibold'>
                            Register An Account
                        </button>
                    </div>
                </form>
                <div className='flex items-center flex-col gap-2'>
                    <p className='text-xl text-header-400 font-medium'>OR</p>
                    <button className='py-2 flex items-center px-10 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold border border-blue-600 rounded-xl transition duration-300 ease-in'>Sign In With Google</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Register