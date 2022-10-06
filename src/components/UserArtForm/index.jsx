import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "../Stepper/Steppers";
import StepperControl from "../StepperControl";
import GalleryName  from "../../components/Steps/GalleryName"
import Details  from "../../components/Steps/Details"
import Pictures  from "../../components/Steps/Pictures"
import Final  from "../../components/Steps/Final"
import { StepperContext } from "../../context/StepperContext";
import axios from "axios"

export default function UserArtForm({ authenticate,user }) {
  
  const [currentStep,setCurrentStep]=useState(1)
  const [userData, setUserData] = useState ('')
  const [finalData, setFinalData] =useState([])
  
  const steps = [
    "Add the name of the Gallery",
    "Add a description of your Gallery",
    "Upload the pictures for your Gallery",
    "Complete"
  ]

  const displayStep =(step)=>{
    switch(step){
      case 1:
        return <GalleryName/>
      case 2:
        return <Details/>
      case 3:
        return <Pictures/>
      case 4:
        return <Final/>
        default:
    } 
  }

  const handleClick= (directions) =>{
     let newStep = currentStep

     directions === "next"? newStep++ : newStep --;
     newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  const handleCreate = () =>{
    console.log("Guardar datos",userData,user)
    axios.post(`${process.env.REACT_APP_SERVER_URL}/gallery/${user._id}`,userData)
    .then(()=>{
      setCurrentStep(4)
    })
  }

  return (
  <>
    <img className="absolute w-full h-screen" src="https://www.michigandaily.com/wp-content/uploads/2022/01/online-AI-art-take-2.jpg" alt="/"/>
    <div className="relative top-14 md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-zinc-300 flex">
      <div className="container horizontal mt-5"> 
      <Stepper
        steps={steps}
        currentStep={currentStep}
      />

      <div className="my-10 p-10">
        <StepperContext.Provider value={{
          userData,
          setUserData,
          finalData,
          setFinalData
        }}>
          {displayStep(currentStep)}
        </StepperContext.Provider>
      
      
      </div>
      {currentStep !== steps.length && 
      <StepperControl 
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps }
        handleCreate={handleCreate}
      />
    }
    </div>
    </div>
  </>    
  );
}
