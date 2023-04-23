
import './App.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import Notefound from './pages/Notefound';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {

const [contacts,setcontacts]=useState([])
const [favcontacts,setfav]=useState([])
const formSuba=(data)=>{

  
setcontacts([...contacts,data])
console.log(contacts)
  }

  const Favcontact=(favcon)=>{
  setfav([...favcontacts,favcon])
  console.log(favcontacts)
  }
  


  return (
    <div>

<BrowserRouter>

 <Navbar/>

  <Routes>
    <Route exact  path='/' element={
    <Home  
    formSubb={formSuba} 
    contacts={contacts} 
    Favcontact={Favcontact} 
     />}/>

     <Route path='/Favourite'
      element={<Favourite  favarites={favcontacts}/>} />

   
  
    

  

    <Route path='*' element={<Notefound/>}/>
  </Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
