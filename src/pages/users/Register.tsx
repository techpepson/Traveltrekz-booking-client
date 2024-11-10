import React, { useState } from "react";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import Image from "../../assets/user/auth.jpeg";
import { Link } from "react-router-dom";
import { FaLock, FaUnlock } from "react-icons/fa";
import { AppDispatch, RootState } from "../../store/config/store.config";
import { useSelector, useDispatch } from "react-redux";
import { RegisterAuthThunk } from "../../store/thunks/auth.thunkApi";
import {
  updateUserEmail,
  updateUserFirstName,
  updateUserLastName,
  updateUserMiddleName,
  updateUserPassword,
} from "../../store/reducers/auth.reducer";
import { RegisterBodyTypes } from "../../interface/auth.reducer.interface";

const Register = () => {
  //state definitions for the password visibility toggle
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isAgreementChecked, setIsAgreementChecked] = useState<boolean>(false);

  //get the initialStates for the auth reducer using the useSelector
  const {
    userFirstName,
    userEmail,
    userLastName,
    userMiddleName,
    userPassword,
    loading,
  } = useSelector((store: RootState) => store.authReducer.register);

  //call the dispatch function
  const dispatch = useDispatch<AppDispatch>();

  //toggle the isAgreementChecked state
  const handleAgreementChecks = () => {
    setIsAgreementChecked(!isAgreementChecked);
  };

  //define an onChange function
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "userFirstName":
        dispatch(updateUserFirstName(value));
        break;
      case "userLastName":
        dispatch(updateUserLastName(value));
        break;
      case "userEmail":
        dispatch(updateUserEmail(value));
        break;
      case "userMiddleName":
        dispatch(updateUserMiddleName(value));
        break;
      case "userPassword":
        dispatch(updateUserPassword(value));
        break;
    }
  };

  //toggle password view function
  const togglePasswordView = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };

  //define a submit function
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    //define the body of the post request
    const registerPayload: RegisterBodyTypes = {
      userFirstName: userFirstName,
      userLastName: userLastName,
      userMiddleName: userMiddleName,
      userEmail: userEmail,
      userPassword: userPassword,
    };
    dispatch(RegisterAuthThunk(registerPayload));
  };

  //handle google oauth thunk api request
  const handleGoogleApi = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    window.location.href = "https://traveltrekz.onrender.com/api/auth/google";
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
            <Link to="/login" className="flex font-semibold text-white">
              Sign In
            </Link>
            <Link
              to="/register"
              className="flex font-semibold bg-white text-blue-600 py-3 px-6 rounded-l-3xl"
            >
              Register
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col gap-10 md:gap-6 max-lg:border max-lg:rounded-2xl max-[340px]:mx-2 max-sm:m-8 max-lg:m-36 max-lg:py-16 max-sm:py-4 max-lg:shadow-lg max-sm:mt-24 xl:gap-8">
          <div className="flex flex-col gap-0 items-center xl:mb-6">
            <h1 className="text-blue-600 font-bold text-xl md:text-4xl">
              TravelTrekz
            </h1>
            <p>Create an account with TravelTrekz</p>
          </div>
          <form
            action=""
            className="flex flex-col gap-4 md:gap-8 xl:gap-10 w-full px-4 md:px-20 "
          >
            <input
              type="text"
              name="userFirstName"
              value={userFirstName}
              onChange={handleOnChange}
              required
              placeholder="First Name"
              className="text-lg md:text-xl outline-none border-b w-full focus:border-b-blue-600"
            />
            <input
              type="text"
              value={userLastName}
              name="userLastName"
              onChange={handleOnChange}
              required
              placeholder="Last Name"
              className="text-lg md:text-xl outline-none border-b w-full focus:border-b-blue-600"
            />
            <input
              type="text"
              name="userMiddleName"
              onChange={handleOnChange}
              value={userMiddleName}
              placeholder="Middle Name"
              className="text-lg md:text-xl outline-none border-b w-full focus:border-b-blue-600"
            />
            <input
              type="email"
              name="userEmail"
              onChange={handleOnChange}
              value={userEmail}
              required
              placeholder="Email"
              className="text-lg md:text-xl outline-none border-b w-full focus:border-b-blue-600"
            />
            <div className="flex items-center border-b w-full focus:border-b-blue-600">
              <input
                type={isPasswordVisible ? "string" : "password"}
                onChange={handleOnChange}
                name="userPassword"
                value={userPassword}
                required
                placeholder="Password"
                className="text-lg md:text-xl outline-none border-b w-full focus:border-b-blue-600"
              />
              {isPasswordVisible ? (
                <button onClick={togglePasswordView}>
                  <FaLock />
                </button>
              ) : (
                <button onClick={togglePasswordView}>
                  <FaUnlock className="font-light" />
                </button>
              )}
            </div>
            <div className="flex items-center gap-2">
              <input
                onClick={handleAgreementChecks}
                type="checkbox"
                className="w-5 h-5 cursor-pointer"
                required
              />
              <p className="max-sm:text-sm">
                I have read, understood and agreed to all{" "}
                <span className="text-blue-600 cursor-pointer">terms</span> and{" "}
                <span className="text-blue-600 cursor-pointer">condition</span>.
              </p>
            </div>
            <div className=" text-white flex items-center justify-end w-full">
              {loading ? (
                <button className="text-lg text-blue-500">
                  <div className="loading loading-bars loading-lg"></div>
                </button>
              ) : (
                <div className="flex flex-col relative">
                  <button
                    disabled={!isAgreementChecked}
                    onClick={handleSubmit}
                    className="bg-blue-600 disabled:cursor-not-allowed disabled:opacity-45 w-full md:w-fit px-2 py-1 md:px-4 md:py-2 text-lg  rounded-2xl font-semibold"
                  >
                    Register
                  </button>
                  {!isAgreementChecked ? (
                    <div className="mt-5">
                      <aside className="text-red-500">
                        Agree to terms and conditions to register!
                      </aside>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              )}
            </div>
          </form>
          <div className="flex items-center flex-col gap-2 max-sm:-mt-5">
            <p className="text-xl text-header-400 font-medium">OR</p>
            <button
              onClick={handleGoogleApi}
              className="py-2 flex items-center px-10 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold border border-blue-600 rounded-xl transition duration-300 ease-in"
            >
              Sign In With Google
            </button>
          </div>
          <div className="flex items-center flex-col max-sm:-mt-5 md:gap-2 lg:hidden">
            <p className="text-sm md:text-xl text-header-400 font-medium flex items-center md:gap-2 gap-1">
              Already have an account?
              <Link to="/login">
                <span className="text-blue-600 cursor-pointer">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
