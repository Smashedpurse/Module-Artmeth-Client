import React from 'react'
import SingUpPic from '../../assets/SingUp.jpg'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { signup } from '../../services/auth';
import * as USER_HELPERS from "../../utils/userToken";

const SingUp = (props) => {
   const {authenticate}=props
    
    const [form, setForm] = useState({
        userName: "",
        email:"",
        password: "",
      });

      const { userName, password,email } = form;
      const [error, setError] = useState(null);
      const navigate = useNavigate();
    
      function handleInputChange(event) {
        const { name, value } = event.target;
        return setForm({ ...form, [name]: value });
      }
    
      function handleFormSubmission(event) {
        event.preventDefault();
        const credentials = {
          userName:userName,
          email:email,
          password,
        };
        signup(credentials).then((res) => {
          if (!res.status) {
            // unsuccessful signup
            console.error("Signup was unsuccessful: ", res);
            return setError({
              message: "Signup was unsuccessful! Please check the console.",
            });
          }
          // successful signup
          USER_HELPERS.setUserToken(res.data.accessToken);
          authenticate(res.data.user);
          navigate("/");
        });
      }

  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'> 
            <img className='w-full h-full object-cover' src={SingUpPic} alt='SingUpPic'/>
        </div>
        <div className='bg-zinc-200 flex flex-col justify-center'>
            <form className='max-w-[550px] w-full mx-auto bg-white p-4' onSubmit={handleFormSubmission}>
                <h1 className=' text-4xl font-bold text-center py-6'>ArtMeth</h1>
                <h1 className=' text-2xl font-bold text-center py-6'>Create your account</h1>
                <div  className='flex flex-col py-2'>
                    <label>Username</label>
                    <input className='border p-2'  type="text" placeholder='Create your Username' value={userName} onChange={handleInputChange} name='userName' />
                </div>
                <div className='flex flex-col py-2'>
                    <label>E-mail</label>
                    <input className='border p-2' type="text" placeholder='Regist your Email' value={email} onChange={handleInputChange} name='email'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2' type="text" placeholder='Provide your password' value={password} onChange ={handleInputChange} name='password' />
                </div>
                <button type='submit' className='border- w-full my-5 py-2 bg-indigo-600  text-white'>Signup</button>
                <div className='flex justify-between'>
                    <p className='flex items-center'> <input className='mr-2' type="checkbox"/> Check me out </p>
                    <p>01001000 01101001 </p>
                </div>
            </form>
        </div>
    </div>

    </>
  )
}

export default SingUp