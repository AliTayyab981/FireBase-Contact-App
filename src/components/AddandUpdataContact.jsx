import React from 'react'
import { Model } from './Model'
import { ErrorMessage, Field, Form, Formik, isFunction } from 'formik'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import db from '../config/config'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
const AddandUpdataContact = ({isopen,onclose,isupdata,contact}) => {
    const addContact  =async(contact)=>{
        try {
            const contactRef=collection(db,"acasdfsqdasjn123")
            onclose()
            await addDoc(contactRef,contact)
            toast.success("Contact Added Successfully")
            
        } catch (error) {
            console.log(error)
        }
    }
    const updataContact  =async(contact,id)=>{
        try {
            const contactRef=doc(db,"acasdfsqdasjn123",id)
            onclose()
            await updateDoc(contactRef,contact)
            toast.success("Contact Updated Successfully")
        } catch (error) {
            console.log(error)
        }
    }
    const ContactSichmaValidation=Yup.object().shape({
        name: Yup.string().required("Name is Required"),
        email: Yup.string().email("Invalid Email").required("Email is Required"),
    })

    
    return (
        <div>
            <Model isopen={isopen} isclose={onclose}>
            <Formik
            validationSchema={ContactSichmaValidation}
              initialValues={
                contact?{
                    name:contact.name,
                    email:contact.email 
                }:{
                    name:"",
                    email:""
                }
            }
            onSubmit={(values)=>{
                isupdata?updataContact(values,contact.id):addContact(values)
            }
            }
            >
            <Form>
                <div className='ml-3 flex flex-col  gap-1.5'>
                <div>
                <label htmlFor='name'>Name</label>
                <Field className="border border-black h-8 w-[260px] pl-2 rounded-sm" name="name"/>
                <div className='text-red-500 text-xs'>
                    <ErrorMessage name='name'>
                    </ErrorMessage>
                </div>
                </div>
                <div>
                <label htmlFor='email'>Email</label>
                <Field className="border border-black h-8 w-[260px] pl-2 rounded-sm" name="email"/>
                <div className='text-red-500 text-xs'>
                    <ErrorMessage name='email'>
                    </ErrorMessage>
                </div>
                </div>
                <button type='submit' className='bg-yellow-500 h-8 w-20 rounded-xl self-end mr-6 mt-2 font-bold '>{isupdata?"Updata":"Add"}</button>
                </div>
               
            </Form>
            </Formik>
            </Model>
        </div>
    )
}

export default AddandUpdataContact