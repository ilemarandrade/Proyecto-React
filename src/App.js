import React,{useEffect,useState} from 'react';
import Screen from "./store/helpers/Screen.js"
import { connect,useStore} from "react-redux";
import FullView from "./components/fullView/fullView.js"
import Init from "./views/paywall/init.js"


/**
*@name App by Ilemar Andrade
*@version 1.0
*@brief Es el contenedor padre de la app
*@return renderiza un componente con la vista completa de la app
*/


const App=()=>{

  const store = useStore()
  const [deviceWidth,setdeviceWidth]=useState(window.innerWidth);
  useEffect(()=>{
     setdeviceWidth(Screen(deviceWidth))
     window.addEventListener('resize', orientation);
     
     return () => 
     {
         
         window.removeEventListener('resize', orientation);
     }

    },[])
  
  
    const orientation=()=>{
  setdeviceWidth(Screen(window.innerWidth))
 }
 


  return(<FullView {...{width:deviceWidth,app:<Init />}}/>)  
}





export default App;