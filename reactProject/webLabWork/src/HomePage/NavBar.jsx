import React from 'react'
<link rel="stylesheet" href="../index.css" />
function NavBar() {

  var bgColor = "navbar-darl bg-dark";

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{width: "100vw", height: "100%" ,position:"absolute", right: "0%"}}>
  <a className="navbar-brand" href="#" style={{marginLeft: "2vw", fontSize: "1.8rem", marginBottom: "1vh"}} >Fit <span style={{fontWeight:"bold", fontSize: "2rem"}}>X</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto" style={{display:"flex", justifyContent:"center"}}>
      <li className="nav-item">
        <a className="btn btn-outline-light" href="./Home.jsx">Home</a>
      </li>
      <li className="nav-item">
        <a className="btn btn-outline-light" href="#">Accessories</a>
      </li>
      <li className="nav-item">
        <a className="btn btn-outline-light" href="#">Clothing</a>
      </li>
      <li className="nav-item">
        <a className="btn btn-outline-light" href="#">Supplements</a>
      </li>
      <li className="nav-item">
        <a className="btn btn-outline-light" href="#">DietAI</a>
      </li>
    </ul>
 
      <form class="form-inline my-2 my-lg-0 " style={{marginLeft: "22vw", display:"flex"
      }}>
      <input class="form-control mr-sm-2 " style={{width: "20vw"}}type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-light my-2 my-sm-0" style={{marginLeft: "1vw"}} type="submit">Search</button>
    </form>
   
  </div>
</nav>
    </>
  )
}

export default NavBar