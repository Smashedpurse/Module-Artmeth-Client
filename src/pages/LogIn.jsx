import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate,Link } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import loginImg from '../assets/Login.jpg'
import LogoGoogle from './Google.svg'
import LogoFacebook from './Facebook.svg'

export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });
  const { userName, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      userName,
      password,
    };
    login(credentials).then((res) => {
      console.log(res)
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      console.log(res.data.user)
      authenticate(res.data.user);
      navigate("/");
    });
  }

  return (
    <>
    
    <div className='absolute w-full h-screen bg-zinc-900/50 sm:block' >
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="loginPic"/>

        <div className='flex justify-center items-center h-full'>
          <form className='max-w-[400px] w-full mx-auto bg-white p-8' onSubmit={handleFormSubmission}>
            <h2 className='text-4xl font-bold text-center py-4'>ArtMeth</h2>
            
            <div className='flex justify-between'>
                          </div>
            <div className='flex flex-col mb-4 py-4 '>
              <label>Username</label>
              <input className='border relative bg-gray-100 p-2' type='text' value={userName} name='userName' onChange={handleInputChange}/>
            </div>
            <div className='flex flex-col '>
              <label>Password</label>
              <input className='border relative bg-gray-100 p-2' type='password' value={password} name="password" onChange={handleInputChange}/>
            </div>
            <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-600 relative text-white'>LogIn</button>
            <Link to='/auth/signup'className="relative">Not a member? Sign up now</Link>
          </form>
        </div>
    </div>
    </>
  );
}
