import React/*, { useState }*/ from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "light",
  // });
  // const [btntext, setBtnText] = useState("ENABLE LIGHT MODE");
  // let  myStyle={
  //     color:'red',
  //     backgroundColor:'blue'
  // };
  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "light",

  //       backgroundColor: "black",
  //     });
  //     setBtnText("ENABLE LIGHT MODE");
  //   } else {
  //     setMyStyle({
  //       color: "black",

  //       backgroundColor: "light",
  //     });
  //     setBtnText("ENABLE  DARK MODE");
  //   }
  // };
  return (
    <div className="container" mode= {props.mode} style={{  backgroundColor: props.mode === "light" ? "dark" : "light",
    color: props.mode === "light" ? "light" : "dark" }} >
      <h1 className="my-3"  style={{  backgroundColor: props.mode === "white" ? "white" : "#003742",
            color: props.mode === "white" ? "#003742" : "white" }}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              // style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={{  backgroundColor: props.mode === "white" ? "white" : "#003742",
            color: props.mode === "white" ? "#003742" : "white" }}
          >
            <div  className="accordion-body">
             This util functionality is absolutely free to use and also safe to use.   
            </div>
          </div>
        </div>
        <div className="accordion-item"  style={{  backgroundColor: props.mode === "white" ? "white" : "#003742",
            color: props.mode === "white" ? "#003742" : "white" }}>
          <h2 className="accordion-header" id="headingTwo">
            <button
             
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             USES
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={{  backgroundColor: props.mode === "light" ? "dark" : "light",
            color: props.mode === "light" ? "dark" : "light" }}
          >
            <div className="accordion-body">
            You can use this functionality to capatilalize your text and also to decapitalize your text. it also counts number of words in your text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{  backgroundColor: props.mode === "light" ? "dark" : "light",
            color: props.mode === "light" ? "dark" : "light" }}>
          <h2 className="accordion-header" id="headingThree">
            <button
             
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             BROWSER COMPATIBILITY
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={{  backgroundColor: props.mode === "white" ? "white" : "#003742",
            color: props.mode === "white" ? "#003742" : "white" }}
          >
            <div  className="accordion-body">
             Easily compatible with any browser like chrome , mozilla firefox,microsoft edge etc.
            </div>
          </div>
        </div>
      </div>
      {/* /* <button type="button" className="btn btn-primary"> */}
        {/* {btntext} */}
      {/* </button>  */}
    </div>
  );
}
