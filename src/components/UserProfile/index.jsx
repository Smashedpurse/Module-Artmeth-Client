import React from 'react'
import { Link } from 'react-router-dom'

const UserProfile = (props) => {
    const {userName,email}=props.user
    console.log(props)
  return (
    <>
    <img src='https://miro.medium.com/max/1400/1*fpmWsIFOXG3lCVxMCqp2mw.png' className="absolute w-full h-screen"/>
    <div className='relative w-full h-screen top-0 left-0 bg-gray-300/30'>
        <div className='flex items-center justify-center'>
             <div className='bg-slate-300 w-1/3 mt-24 rounded-lg' >
                <div className='flex items-center justify-center py-6 flex-col'>
                    <img src='https://i.pinimg.com/236x/75/12/47/7512470ad9d72a2bdecf7f84f75fa852--local-dentist-cosmetic-dentistry.jpg' className='rounded-full w-32' alt='UserPic'/>
                    <h1 className=' text-gray-700 font-bold text-xl my-4'>{userName}</h1>
                    <h1 className=' text-gray-700 font-bold text-xl my-4'>{email}</h1>
                </div>
                <div className='flex item-center justify-center text-gray-700 font-bold text-xl my-4 flex-col'>
                    <div className='flex flex-row items-center justify-center '>
                    <Link to={"/user/create-gallery"} className="authLink"> <button className='bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'>Create your Gallery</button></Link>
                    <Link to={"/user/gallery"} className="authLink"> <button className='bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'>View Gallery</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>    
  )
}

export default UserProfile




        