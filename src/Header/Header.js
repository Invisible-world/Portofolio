import Headerleft from "./Headerleft"
import Headerright from './Headerright'

const Header = () => {
    return (
        <>
       
       
        
       <div style={{height:'50vh'}}>
           <div className='container'>
               <div className='row'>
               <div className='col-7'>
               <Headerleft name='Sameer Pokharel' job='Front-End Developer' />
               </div>
               <div className='col-5'>
               <Headerright />
               </div>
               </div>
           </div>
      
       </div>
            
            
            
            
      
      
      
     
            
            
            
        </>
    )
}

export default Header
