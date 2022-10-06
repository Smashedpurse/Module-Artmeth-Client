import { motion } from 'framer-motion'
import { useRef,useEffect,useState } from 'react'
import React from 'react'
import Images from '../Art/Images'
import styles from './styles.css'


const Slider = () => {
    const [width,setWidth] = useState (0)
    const carousel = useRef()
   

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])

  return (
    <motion.div ref={carousel} className='carousel' whileTap={{cursor:"grabbing"}}>
        <motion.div drag="x" dragConstraints={{right:0, left: - width }} className='inner-carousel'>
            {Images.map(image=>{
                return(
                 <motion.div className='item' key={image}>
                    <img src={image} alt='Carrusel'></img>
                 </motion.div>   
                )
            })}
        </motion.div>
    </motion.div>
  )
}
    

export default Slider