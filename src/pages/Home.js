import React from 'react'
import Form from '../components/Form'
import Contacts from '../components/Contacts'
function Home({formSubb}) {
  return (
    <>
    
    <div  className='homecomponent'>  
      <Form   formSubc={formSubb}/>
    
    </div>
    <Contacts/>
    </>
  )
}

export default Home
