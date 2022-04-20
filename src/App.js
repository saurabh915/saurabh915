// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  const [mode,setmode]=useState("white");
  const [alert,setAlert]= useState(null);
  const togglemode= ()=>{
    if(mode === '#003742')
    {
      setmode ("white");
     document.body.style.backgroundColor ="white";
     
       showAlert("light mode is enabled","success");//calling show alert;
      
    
    }
    else{
      setmode("#003742") ;
      document.body.style.backgroundColor ="#003742";
     
        showAlert("dark mode is enabled","success");
      
      
    }
  }
 
  const showAlert = (message,type)=>{
   
           setAlert({msg:message,
                     type:type});
                     setTimeout(() => {
                      setAlert(null);
                     }, 3000);
  };
  return (
  <>
<Router>
{ <Navbar title="TextUtils" aboutTextUtils = "about us" mode = {mode} togglemode ={togglemode} />  }
<Alert  alert= {alert}/>
<div className="container"  >

 {/* here if we do not include title and aboutTextUtils then default props will be included  */}
 <Routes>

 <Route exact path="/" element ={<TextForm  showAlert ={showAlert} heading = "Enter the text to analyse" mode = {mode}   /> }>

 </Route>
 <Route exact path="/about" element ={<About  mode = {mode} />}>

 
 
 </Route>
 </Routes>

</div>

  </Router>  
 </>
  );
}

export default App;
