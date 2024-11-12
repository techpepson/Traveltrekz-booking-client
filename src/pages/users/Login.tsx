import React, { useState } from "react";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import Image from "../../assets/user/auth.jpeg";
import { Link } from "react-router-dom";
import { LoginAuthThunk } from "../../store/thunks/auth.thunkApi";
import { AppDispatch, RootState } from "../../store/config/store.config";
import { useSelector, useDispatch } from "react-redux";
import { LoginBodyTypes } from "../../interface/auth.reducer.interface";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //call the useDispatch method
  const dispatch = useDispatch<AppDispatch>();

  //fetch the loading state from the reducer
  const { loading } = useSelector(
    (store: RootState) => store.authReducer.login
  );

  //handle submit function
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    //login payload
    const loginPayload: LoginBodyTypes = {
      userEmail: email,
      userPassword: password,
    };
    dispatch(LoginAuthThunk(loginPayload));
  };

  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="flex lg:grid lg:grid-cols-2 items-center gap-4">
        <div className="w-full h-full hidden lg:flex relative">
          <img src={Image} alt="" className="w-full bg-cover h-full" />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity`}
          ></div>
          <div className="absolute top-52 right-0 flex items-center flex-col gap-6 text-xl">
            <Link
              to="/login"
              className="flex font-semibold bg-white text-blue-600 py-3 px-6 rounded-l-3xl"
            >
              Sign In
            </Link>
            <Link to="/register" className="flex font-semibold text-white">
              Register
            </Link>
          </div>
        </div>
        <div className="flex items-center max-lg:border max-lg:rounded-2xl max-sm:m-8 max-lg:m-36 max-lg:py-16 max-sm:py-4 max-lg:shadow-lg max-sm:mt-24 w-full justify-center flex-col gap-2 md:gap-10">
          <div className="flex flex-col gap-0 items-center mb-10">
            <h1 className="text-blue-600 text-lg md:text-4xl font-bold">
              TravelTrekz
            </h1>
            <p>Log in to TravelTrekz</p>
          </div>
          <form
            action=""
            className="flex flex-col md:gap-10 gap-4 px-4 w-full md:px-20 "
          >
            <input
              type="email"
              name="userEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="text-xl outline-none border-b w-full focus:border-b-blue-600"
            />
            <input
              type="password"
              name="userPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="text-xl outline-none border-b w-full focus:border-b-blue-600"
            />
            <div className=" text-white max-sm:mt-2 max-sm:text-sm flex flex-col md:flex-row md:items-center justify-between w-full gap-2">
              <p className="text-header-600 font-semibold hover:text-blue-600 cursor-pointer">
                Forgot Password?
              </p>
              {loading ? (
                <div className="loading text-blue-500 loading-bars loading-md"></div>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 w-full md:w-fit px-2 py-1 md:px-4 md:py-2 text-lg rounded-2xl font-semibold"
                >
                  Log In
                </button>
              )}
            </div>
          </form>
          <div className="flex items-center flex-col gap-2">
            <p className="text-xl text-header-400 font-medium">OR</p>
            <button className="py-2 flex items-center px-10 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold border border-blue-600 rounded-xl transition duration-300 ease-in">
              Sign In With Google
            </button>
          </div>
          <div className="flex items-center flex-col md:gap-2 lg:hidden">
            <p className="text-sm md:text-xl text-header-400 font-medium flex items-center md:gap-2 gap-1">
              Don't have an account?
              <Link to="/register">
                <span className="text-blue-600 cursor-pointer">Register</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
