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
        <div className='flex lg:grid lg:grid-cols-2 items-center gap-4'>
            <div className='w-full h-full hidden lg:flex relative'>
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
            <div className='flex items-center justify-center flex-col gap-10 md:gap-6 max-lg:border max-lg:rounded-2xl max-sm:m-8 max-lg:m-36 max-lg:py-16 max-sm:py-4 max-lg:shadow-lg max-sm:mt-24 xl:gap-8'>
                <div className='flex flex-col gap-0 items-center xl:mb-6'>
                    <h1 className='text-blue-600 font-bold text-xl md:text-4xl'>TravelTrekz</h1>
                    <p>Create an account with TravelTrekz</p>
                </div>
                <form action="" className='flex flex-col gap-4 md:gap-8 xl:gap-10 w-full px-4 md:px-20 '>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        placeholder='Full Name' 
                        className='text-lg md:text-xl outline-none border-b w-full focus:border-b-blue-600'
                    />
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        placeholder='Email' 
                        className='text-lg md:text-xl outline-none border-b w-full focus:border-b-blue-600'
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        placeholder='Password' 
                        className='text-lg md:text-xl outline-none border-b w-full focus:border-b-blue-600'
                    />
                    <div className='flex items-center gap-2'>
                        <input 
                            type="checkbox" 
                            className='w-5 h-5 cursor-pointer' 
                            required
                        />
                        <p className='max-sm:text-sm'>I have read, understood and agreed to all <span className='text-blue-600 cursor-pointer'>terms</span> and <span className='text-blue-600 cursor-pointer'>condition</span>.</p>
                    </div>
                    <div className=' text-white flex items-center justify-end w-full'>
                        <button 
                            onClick={handleSubmit} 
                            className='bg-blue-600 w-full md:w-fit px-2 py-1 md:px-4 md:py-2 text-lg  rounded-2xl font-semibold'>
                            Register
                        </button>
                    </div>
                </form>
                <div className='flex items-center flex-col gap-2 max-sm:-mt-5'>
                    <p className='text-xl text-header-400 font-medium'>OR</p>
                    <button className='py-2 flex items-center px-10 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold border border-blue-600 rounded-xl transition duration-300 ease-in'>Sign In With Google</button>
                </div>
                <div className='flex items-center flex-col max-sm:-mt-5 md:gap-2 lg:hidden'>
                    <p className='text-sm md:text-xl text-header-400 font-medium flex items-center md:gap-2 gap-1'>Already having an account? 
                        <Link to="/login"><span className='text-blue-600 cursor-pointer'>Login</span></Link>
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Register