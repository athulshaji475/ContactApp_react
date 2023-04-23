
import Favcontacts from '../components/Favcontacts'

function Favourite({favarites}) {
  
  
  return (
    <div style={{display:'flex',justifyContent:"center"}}>
    
      
        {
          
       favarites.map((data)=>{
      return <Favcontacts key={data.id} Singledata={data}/>
      
       })
       
        
        }
    </div>
  )
}

export default Favourite
