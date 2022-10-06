import React from 'react'
import { useContext } from 'react'
import { StepperContext } from '../../context/StepperContext'

const GalleryName = () => {
  const {userData, setUserData}=useContext (StepperContext)
const handleChange= (e) =>{
  const {name,value} =  e.target;
  setUserData({...userData, [name]: value})
}
return (
  <>
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Gallery Name
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["galleryname"] || ""}
            name="galleryname"
            placeholder="Name of your Gallery"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
    </div>
</>  
  );
}


export default GalleryName