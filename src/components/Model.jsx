import React from 'react'
import { createPortal } from 'react-dom';
import { MdCancel } from "react-icons/md";


export const Model = ({isopen,isclose,children}) => {
  return createPortal(
    <>
    {isopen && 
    <div className='backdrop-blur h-screen w-screen absolute top-0 z-40'>
    
    <div className='h-[230px] w-[300px] bg-white rounded-lg relative z-50 m-auto mt-40 '>
    <div className=' flex justify-end '>
    <MdCancel className='text-2xl' onClick={isclose} />
    </div>
    {children}
    </div>
    
    <div onClick={isclose} />
    </div>
    }
    </>,document.getElementById("model-root")
  )
}
