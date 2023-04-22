
import './App.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import Notefound from './pages/Notefound';
import Navbar from './components/Navbar';

function App() {
  const formSuba=(data)=>{
console.log(data)
  }
  return (
    <div>

<BrowserRouter>

 <Navbar/>

  <Routes>
    <Route exact  path='/' element={<Home  formSubb={formSuba}/>}/>
    <Route path='/Favourite' element={<Favourite/>}/>
    <Route path='*' element={<Notefound/>}/>
  </Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
