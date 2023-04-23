import React from 'react'

function Favcontacts({Singledata}) {

    console.log("From favorites contact=>"+Singledata)
  return (
    <div className='boxshadow' >
 <div style={{width:"100px",display:"inline"}} >
      <div class="card" >
  <div class="card-body" style={{backgroundColor:"pink"}}>
    <h5 class="card-title" >{Singledata.name}  </h5>
    <p class="card-text">{Singledata.email}</p>
    <br></br>
   
    
  </div>

    </div>
    </div>
    </div>
  )
}

export default Favcontacts
