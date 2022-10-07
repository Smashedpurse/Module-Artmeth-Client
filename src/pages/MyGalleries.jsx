import React from 'react'
import {galleryDetailsUser} from "../services/index";
import { useState,useEffect } from 'react';

const MyGalleries = (props) => {

    const [galleries,setGalleries] = useState ([])


    const {user} = props
    console.log(user)

    useEffect(()=>{
         galleryDetailsUser(user._id)
        .then(info => setGalleries(info.data.galleries))
        .catch(error => console.log(error))
    },[])

  return (
    <div>
        <div>
        <h1 className='relative py-3 text-2xl m-10 t-18 md:text-4xl font-bold flex justify'>My Gallery</h1>
        <div className="grid grid-cols-3 gap-4"></div>
            {galleries.map ((gallery) =>{
                return(
                    <>
                    <div>
                        <div className='w-80 h bg-zinc-200/20 rounded-xl m-32'>
                            <img className='rounded-lg' src={gallery.Pic} alt="/"></img>
                            <div className='p-2'></div>
                            <h2 className='font-bold text-lg'key={gallery._id}> {gallery.galleryname} </h2>
                            <p className='text-sm text-gray-600'>{gallery.galleryname}</p> 
                        </div>
                    </div>
                    </>
                )  
            })}
        </div>
    </div>
  )
}

export default MyGalleries