
import React from "react";
import './Style.css';
import trip from "./imageInSrc .jpg"

function App() {
  return (
    <div className="container">
       <div style={{border:"solid 1px black",maxwidth:"100vw"}}> 
       <h1 className ="title red">Hey it's Me, Roua!</h1>
       <img src="/imageInPublic.jpg"   alt="tripp" style={{width:"175px" }} className ="im"/ >
       <img src={trip}  alt="trip" style={{width:"250px"}} className ="im "/ >
       </div>
       <video width="320"  controls className ="im">
      <source src="/nature.mp4" type="video/mp4"/ >
      </video>
      </div>
  );
}

export default App;
