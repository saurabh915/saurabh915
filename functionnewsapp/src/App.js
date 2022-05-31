// import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
// import NewsItem from './components/NewsItem';
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
const App =()=> {
const apiKey = process.env.REACT_APP_NEWS_API


const [progress,setProgress]=useState(0)

  
  
    return (
<>
      <div>
        <Router>
        {<NavBar />}
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
          <Routes>                  
            {/* passing state as props */}
            <Route  exact path="/" element={ <>  <News setProgress=  {setProgress} apiKey={apiKey} key ="general" pageSize={4} category="general" named="" /></>}/>
              {/* this pageSize will be transfered as prop; */}
             
 
            <Route  exact path="/business" element={  <News setProgress=  {setProgress} apiKey={apiKey}
            key ="business" pageSize={4} category="business" named="" />}>
              </Route>
            <Route exact path="/entertainment" element={    <News setProgress=  {setProgress} apiKey={apiKey} key ="entertainment"  pageSize={4} category="entertainment" named="" />}/>
            
            
            <Route  exact path="/science" element= {  <News setProgress=  {setProgress} apiKey={apiKey} key ="science" pageSize={4} category="science" named="" />}/>
              
           
            <Route  exact path="/health" element={   <News setProgress=  {setProgress} apiKey={apiKey} key ="health" pageSize={4} category="health" named="" />}/>
             
           
           
            <Route exact path="/sports" element={    <News setProgress=  {setProgress} apiKey={apiKey}  key ="sports"pageSize={4} category="sports" named="" />}/>
            
            
            <Route  exact path="/technology"element ={  <News setProgress=  {setProgress} apiKey={apiKey}
            key ="technology" pageSize={4} category="technology" named="" />}/>
              
           
          </Routes>
</Router>
          
        
      </div>
      </>
    );
  
}
export default App