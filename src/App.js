import React, {useState,useEffect} from 'react'
import Layout from './hocs/Layout'
import './App.css'
const App = () => {
  const [dark,setDark] = useState(false)
   
  useEffect(()=>{
        const switchmode = ()=> {
          
            if(dark){
              document.body.style.backgroundColor = "#0e2431";
              document.body.style.color = "#fff";
            }
            else {
              document.body.style.backgroundColor = "#fff";
              document.body.style.color = "black";
            }
        }
        switchmode()
    },[dark])
  return(
    <div id="bg">
      <Layout dark = {dark} setDark= {setDark}/>
    </div>
  )
  };

  export default App