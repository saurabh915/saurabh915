import React, { useState } from "react";

export default function TextForm(props)
 {

  //below is hook
  const [text, setText] = useState("enter the text here"); //here text is variable which can be used to set value in any heading or paragraph or divison and then we can change it with setText it can not changed by setText....
  // text = "enter the text";
  const handleCopy =()=>{
    var texty = document.getElementById("exampleFormControlTextarea1");
    
    props.showAlert("coppied to clipboard!","success");
    console.log("called to copy");
    texty.select();
    navigator.clipboard.writeText(texty.value);
    document.getSelection().removeAllRanges();
  }
  const handleUpClick = () => {
    console.log("uppercase button is clicked");
    

const buttn = document.getElementById("change");
   
      buttn.innerHTML = "CONVERT TO LOWERCASE";
     let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("converted to uppercase","success");
   
    
    }
    const buttn = document.getElementById("change2");
    const handleLoClick = () => {
      if( buttn.innerHTML === "CONVERT TO UPPERCASE")
      {
        console.log("uppercase button is clicked");
    

        const buttn = document.getElementById("change2");
           
              buttn.innerHTML = "CONVERT TO LOWERCASE";
             let newText = text.toUpperCase();
              setText(newText);
              props.showAlert("converted to uppercase","success");
        
      }
      else{
        let newText2;
        let buttn = document.getElementById("change2");
        newText2 = text.toLowerCase();
        console.log("lowercase button is clicked");
        buttn.innerHTML = "CONVERT TO UPPERCASE";
    
        setText(newText2);
        props.showAlert("converted to lowercase","success");



      }
     
      
      
   
  };
  const handleOnChange = (event) => {
    //event takes the value of text + the new changed value in event object
    

    setText(event.target.value); //here that event object is pasted into value and that value is set into text variable which can be changed by setText..
  };
  // setText("enter t");

  // const  handleSizeClick =()=>{

  //   let fontsize =document.getElementbyId('exampleFormControlTextarea1');
  //   fontsize.style.font-size == {i} ;
  // }
  return (
    <>
      <div  className="container"
     
          style={{  backgroundColor: props.mode === "white" ? "white" : "#003742",
            color: props.mode === "white" ? "#003742" : "white" }}>
        
          <h1  >
            {props.heading}
          </h1>{/* this heading is used in app to access heading */} 
        
        <div
          className="mb-3"
          style={{
            backgroundColor: props.mode === "white" ? "white" : "#003742",
            color: props.mode === "white" ? "#003742" : "white"
          }}        >
          <label htmlFor="exampleFormControlTextarea1" className="form-label"  style={{  backgroundColor: props.mode === "white" ? "white" : "#003742",
            color: props.mode === "white" ? "#003742" : "white" }}>
            Example textarea
          </label>
          <textarea
            className="form-control"
            
            value={text}
            onChange={handleOnChange}
            mode= {props.mode}
            style={{
              backgroundColor: props.mode === "white" ? "#003742" : "white",
              color: props.mode === "white" ? "white" : "#003742"
            }}
            id="exampleFormControlTextarea1"
            rows="8"
          >
           </textarea>
        </div>
       
        <button className="btn btn-primary" id="change2" onClick={handleLoClick} disabled={ text.length===0}>
          CONVERT TO UPPERCASE
        </button>
        <button className="btn btn-primary" id="copybox" onClick={handleCopy} disabled={ text.length===0}>
          COPY TEXT
        </button>
        {/* <button className='btn btn-primary'id='change' onClick={handleSizeClick}>INCREASE FONT SIZE</button> */}
      </div>
      <div className="container"      style={{
              
              color: props.mode === "white" ? "#003742" : "white"
            }}>
        <h1>your text summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length != 0 }).length} words and {text.length} characters
        </p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );

          }