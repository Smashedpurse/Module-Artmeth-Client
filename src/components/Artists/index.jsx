import React from 'react'
import Artb from '../../assets/Artb.jpg'

const ArtistCard = () => {
  return (
    <>
   <h1 className='absolute py-3 text-2xl m-10 md:text-4xl font-bold'>Artists</h1>
    <div className='bg-gray-200 w-full min-h-screen flex justify-start items-center shadow-lg hover:shadow-2xl '>
        <div className='w-80 h bg-zinc-200/20 rounded-xl m-32'>
              <img className='rounded-lg' src={Artb} alt="/"></img>
              <div className='p-2'></div>
              <h2 className='font-bold text-lg'> UserName </h2>
              <p className='text-sm text-gray-600'>Description of the artist</p> 
              <div className='m-2'>
              <button className='text-white bg-purple-600 px-3 py-'>See More</button>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default ArtistCard