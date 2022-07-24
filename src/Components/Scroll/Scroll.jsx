import Scrollbar from 'smooth-scrollbar';
import { useEffect } from 'react';
  

//   const overscrollOptions = {
//     enable: true,
//     effect: 'glow',
//     damping: 0.1,
//     maxOverscroll: 200,
//     glowColor: '#222a2d',
//   };

  
const options = {
    damping : 0.07,
  }
  
  const Scroll = () => {

    useEffect(() => {


        Scrollbar.init(document.body, options);
        
    
      
    
        return () => {
          if (Scrollbar) Scrollbar.destroy(document.body)
        }  },[])
  


    return null;
}

export default Scroll;