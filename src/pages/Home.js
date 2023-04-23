import React from 'react'
import Form from '../components/Form'
import Contacts from '../components/Contacts'
function Home({formSubb,contacts, Favcontact}) {
 // console.log(contacts)
  return (
    <>
    
    <div  className='homecomponent'>  
      <Form   formSubc={formSubb}/>
    
    </div>
    <br/>
    <div className='contactcarsd'>
    {
      contacts.map((SingleContact)=>{
        return <Contacts key={SingleContact.id}  contact={SingleContact} getfavcontact={ Favcontact} />
      })
    
    }
    </div>
    </>
  )
}

export default Home
