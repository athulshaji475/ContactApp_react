import React from 'react'
import { Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className='navposition'>
     <ul class="navbar navbar-dark bg-dark">
    <li><Link to='/' style={{color:"white",textDecoration:"none"}}  ><h3>Home</h3></Link></li>
    <li><Link to='/Favourite' style={{color:"white",textDecoration:"none"}}  ><h3>Favourite</h3></Link></li>
  </ul>
    </div>
  )
}

export default Navbar
