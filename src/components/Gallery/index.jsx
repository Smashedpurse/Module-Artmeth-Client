import React, { useEffect, useState } from 'react'
import Arta from '../../assets/Arta.jpg'
import SliderGallery from '../SliderGallery'


const CardGallerty = () => {

    const [gallerys,setGallery] = useState ([])

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_SERVER_URL}/gallery`)
        .then(galleryInfo => galleryInfo.json())
        .then(info =>{
                console.log(info)
                setGallery(info)
        })
        .catch(error => console.log(error))
    },[])

  return (
    <>
    <h1 className='relative py-3 text-2xl m-10 t-18 md:text-4xl font-bold flex justify'>Gallery</h1>
        
            <div >
                <div className='bg-zinc-200/20 rounded-xl m-8'>
                    <div className="grid grid-cols-3 gap-4">
                    {
                        gallerys.map((gallery)=>{
                            return <SliderGallery key={gallery._id} {...gallery}/>  
                        })
                    }
                    </div>
                </div>
            </div>
    </>
  )
}

export default CardGallerty

