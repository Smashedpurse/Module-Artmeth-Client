import React from 'react'
import artEvol from '../../assets/Evolution.jpg'

const index = () => {
  return (
    <div className='w-full h-screen mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90  flex items-center justify-center'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={artEvol} alt="Evolution"/>
        </div>
        <div>
            <div>
                <h2 className='text-center'>Evolution</h2>
                <h3>Providing a free space and vision for all the artists. </h3>
            </div>
        </div>
        <div>
            <div>
                <div>
                    <h2>Creating an amazing community</h2>      
                    <p>Be part of this amazing community and show to the world the magic of your art  and if you want combined with the magic of the IA </p>   
                </div>               
            </div>

        </div>
    </div>
  )
}

export default index