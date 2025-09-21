import React from 'react'
import dumbell from '../images/dumbell.png'
<link rel="stylesheet" href="./index.css" />
function HeroSection() {
  return (
    <>
    <div className="card text-center bg-dark" style={{height: "100%", width: "100%", position: "absolute", right: "0%"}}>

  <div className="card-body bg-dark" style={{display: "flex"}}>
    <div style={{flex: 1}}>
      <img src={dumbell} className="rounded mx-auto d-block" alt="..." style={{height: "17vh", width:"15vw"}}/>
    </div>
    <div style={{ marginLeft:"10vw"}}>
      <h5 className="card-title" style={{color: "white"}} >Diet AI</h5>
    
    <p className="card-text" style={{color: "white"}}>Check out our special AI Dietary Tool, can be used to ask for Optimum Food Intake, Best Exercize Routine
      and everything related.
       </p>
    <a href="./DietAI"id='btn1' className="btn btn-outline-info" style={{height: "5vh"}}><p>Try Now</p></a>
    </div> 
  </div>
</div>
    </>
  )
}

export default HeroSection