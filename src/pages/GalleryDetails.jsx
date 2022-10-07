import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { galleryDetails } from '../services' 


const GalleryDetail = () => {
    const [details,setDetails] = useState ({})
    const {id} = useParams()


    useEffect(()=>{
        galleryDetails(id)
        .then(answer => setDetails(answer.data))
        .catch(error => console.log(error))
    },[])

  return (
    <>
   <h1 className='absolute py-3 text-2xl m-10 md:text-4xl font-bold'>Details</h1>
    <div className='bg-gray-200 w-full min-h-screen flex justify-start items-center shadow-lg hover:shadow-2xl '>
        <div className='w-80 h bg-zinc-200/20 rounded-xl m-32'>
              <img className='rounded-lg' src={details.Pic} alt="/"></img>
              <div className='p-2'></div>
              <h2 className='font-bold text-lg'> {details.galleryname} </h2>
              <p className='text-sm text-gray-600'>{details.description}</p> 
              <div className='m-2'>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default GalleryDetail