import { motion } from 'framer-motion'
import { useRef,useEffect,useState } from 'react'
import React from 'react'
import Images from '../Art/Images'
import styles from './styles.css'
import { Link } from 'react-router-dom'


const SliderGallery = (props) => {
    const {Pic,galleryname,description,_id}=props
    console.log(props)
    const [width,setWidth] = useState (0)
    const carousel = useRef()
   

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])

  return (
    
            <div className='w-80 bg-zinc-200/20 rounded-xl m-8'>

                <motion.div ref={carousel} className='carousel' whileTap={{cursor:"grabbing"}}>
                <motion.div drag="x" dragConstraints={{right:0, left: - width }} className='inner-carousel'>
                {Images.map(image=>{
                return(
                 <motion.div className='item' key={image}>
                    <img src={Pic} alt='Carrusel'></img>
                 </motion.div>   
                )
                })}
                </motion.div>
                </motion.div>
                

                <div className='p-2'></div>
                <h2 className='font-bold text-lg'> {galleryname} </h2>
                <p className='text-sm text-gray-600'>{description}</p>  
                <div className='m-2'>
               <Link to={`/gallery/details/${_id}`}><button className='text-white bg-purple-600 px-3 py-'>See More</button></Link>
            </div>
        </div>
    
  )
}
    

export default SliderGallery



