import './App.css';
import { BrowserRouter as Router, Routes, Route } from"react-router-dom"; 
import React from "react";


import Navbar from './components/Navbar';
import {Home} from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
function App() {
  return (
    <>    
    <NoteState>
     
      {/* this will allow all components to access notestate */}
      
    <Router>
        {<Navbar  />}
        <Alert message="warning"/>
        <div className="container">

      <Routes>
<Route exact path = "/" element={ <Home/>}></Route>
      </Routes>
      <Routes>
<Route exact path = "/about" element={ <About/>}></Route>
      </Routes>

        </div>
    </Router>
    
    <h1>this is my app</h1>
    
    </NoteState>
   
    </>
  );
}

export default App;
