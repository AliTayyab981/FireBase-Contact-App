
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { collection,getDocs, onSnapshot } from 'firebase/firestore'
import db from './config/config'
import ContactCard from "./components/ContactCard";
import AddandUpdataContact from "./components/AddandUpdataContact";
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NoContact from "./components/NoContact";
function App() {
  const [contact, setcontact] = useState([])
  const [isopen, setisopen] = useState()
  useEffect(()=>{
    const getContact = async () => {
      try {
        const contactref=collection(db,"acasdfsqdasjn123")
        onSnapshot(contactref,(snapshot)=>{
          const contactlist = snapshot.docs.map((doc)=>{
            return{
              id:doc.id,
              ...doc.data()
            }
          })
          setcontact(contactlist)
          return contactlist

        })
        
        
      } catch (error) {
        console.log(error)
      }
    }
    getContact()
  },[])
  const onopen=()=>{
    setisopen(true)
  }
  const onclose=()=>{
    setisopen(false)
  }
  const FilterContact=(e)=>{
    const value=e.target.value

    const contactref=collection(db,"acasdfsqdasjn123")
    onSnapshot(contactref,(snapshot)=>{
      const contactlist = snapshot.docs.map((doc)=>{
        return{
          id:doc.id,
          ...doc.data()
        }
      } 
      )  

      const FilterContacts =  contactlist.filter((contact)=>
      contact.name.toLowerCase().includes(value.toLowerCase()) ) 
      setcontact(FilterContacts)
      return FilterContacts
    })

    
      
  }
  return (
    <div className="flex justify-center">
      <div>
    <div className="mt-3 ml-2 ">
     <Navbar/>
     <Searchbar FilterContact={FilterContact} onopen={onopen}/>
    </div>
      <div>
        {
          contact.length <= 0 ? <NoContact/> :          contact.map((contact)=>(
             <ContactCard  key={contact.id} contact={contact}/>
          ))

        }
      </div>
      <AddandUpdataContact  isopen={isopen} onclose={onclose}/>
      <ToastContainer position="bottom-center"/>
    </div>
    </div>
  )
}
export default App
