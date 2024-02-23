import React, { useState } from 'react'
import { RiEditCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {  deleteDoc, doc } from 'firebase/firestore';
import db from '../config/config'
import AddandUpdataContact from './AddandUpdataContact';
import { toast } from 'react-toastify';
const ContactCard = ({contact}) => {
    const deleteContact  =async(id)=>{
        try {
            
            await deleteDoc(doc(db,"acasdfsqdasjn123",id))
            toast.dark("Contact Deleted Successfully")
        } catch (error) {
            console.log(error)
        }
    }
    const [isopen, setisopen] = useState(false)
     const onopen=()=>{
    setisopen(true)
  }
  const onclose=()=>{
    setisopen(false)
  }
    return (
        <>        <div className="ml-3 mt-3 bg-yellow-100 flex justify-between items-center rounded-2xl p-2 w-[360px] h-[64px]">
            <div className='flex gap-5'>
                <CgProfile className="text-yellow-600 text-4xl" />
                <div>
                    <h2 className=' text-xl font-medium'>{contact.name}</h2>
                    <p className=''>{contact.email}</p>
                </div>
            </div>
            <div className="flex ">
                <RiEditCircleLine onClick={setisopen} className="text-3xl text cursor-pointer" />
                <MdDelete onClick={()=>deleteContact(contact.id)} className="text-3xl text-yellow-600 cursor-pointer"  />
            </div>
        </div>
        <AddandUpdataContact contact={contact} isopen={isopen} onclose={onclose}  isupdata />
        </>

    )
}
export default ContactCard