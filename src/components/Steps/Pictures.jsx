import React from 'react'
import { useContext } from 'react';
import { StepperContext } from '../../context/StepperContext';
import axios from 'axios'



const Pictures= (props) => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFileUpload = (e) => {
 
    const uploadData = new FormData();
    console.log("enviar datos")
  
      uploadData.append("imageUrl", e.target.files[0]);
 
    axios
      .post( `${process.env.REACT_APP_SERVER_URL}/upload`,uploadData)
      .then(response => {
        console.log(response)
        setUserData({ ...userData, "Pic": response.data.fileUrl });

      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Select the Pics for your gallery
        </div>
        <div className="bg-zinc-300 my-2 p-1 flex border border-zinc-300 rounded">
          <input
            onChange={handleFileUpload}
            // value={userData["Pic"] || ""}
            name="Pic"
            type="file"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-zinc-300"
          />
        </div>
        <img src={userData.Pic}/>
      </div>
    </div>
  );
}

export default Pictures