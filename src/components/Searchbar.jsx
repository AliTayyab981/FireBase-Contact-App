import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
const Searchbar = ({FilterContact,onopen}) => {
  return (
    <div className="mt-2 flex items-center gap-1 ">
     <IoMdSearch className="absolute text-white text-4xl ml-1 mt-1" />
     <input onChange={FilterContact} type="text" className="border border-white w-[315px] h-[40px] bg-transparent rounded-lg pl-12 text-white text-xl placeholder-white"  placeholder="Search Contact" />
     <IoIosAddCircle onClick={onopen}  className="text-white text-6xl cursor-pointer " />
     </div>
  )
}

export default Searchbar