import React from 'react'
import Register from '../../assets/register.svg'
import Login from '../../assets/login.svg'
import Help from '../../assets/help.svg'
import { Link } from 'react-router-dom'

const SigninOption: React.FC = () => {
  return (
    <div className="bg-white rounded-md py-6 px-3 flex flex-col gap-4 border w-fit">
      <h1 className="text-xl font-semibold px-4">Guest Mode</h1>
      <div className="flex flex-col gap-1">
        <Link
          to="/register"
          className="flex items-center gap-2 cursor-pointer py-2 px-3 hover:bg-header-200 hover:rounded-md hover:"
        >
          <img src={Register} alt="" />
          <p>Sign Up</p>
        </Link>
        <Link
          to="/login"
          className="flex items-center gap-2 cursor-pointer py-2 px-3 hover:bg-header-200 hover:rounded-md hover:"
        >
          <img src={Login} alt="" />
          <p>Login</p>
        </Link>
        <Link
          to="/help"
          className="flex items-center gap-2 cursor-pointer py-2 px-3 hover:bg-header-200 hover:rounded-md hover:"
        >
          <img src={Help} alt="" />
          <p>Help Center</p>
        </Link>
      </div>
    </div>
  );
};

export default SigninOption