import React from 'react'

function Contacts({contact,getfavcontact}) {
  //console.log(contact)
  const setfavcontact=()=>{
  contact.fav=true
  //console.log(contact)
  getfavcontact(contact)
  }


  return (
    <div style={{width:"200px"}}>
      <div class="card" >
  <div class="card-body">
    <h5 class="card-title" style={{backgroundColor:"lightblue"}}>{contact.name}  </h5>
    <p class="card-text">{contact.email}</p>
    <p class="card-text">{contact.fav}</p>
    <button onClick={setfavcontact} className="btn btn-primary">add to Favourite</button>
    
  </div>
</div>
    </div>
  )
}

export default Contacts
