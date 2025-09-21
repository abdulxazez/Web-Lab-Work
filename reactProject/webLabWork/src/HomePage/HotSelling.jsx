import React from 'react'
import metalPlates from '../images/metalWeight.jpg'
import dumbel from '../images/metaDumbell.jpg'
import shirt from '../images/gymShirt.jpg'
import trouser from '../images/trouser.webp'
import wheyProtein from '../images/wheyProtein.avif'
import creatine from '../images/creatine.avif'
import cart from '../images/cart.png'
<link rel="stylesheet" href="../index.css"/>
function HotSelling() { 
    var objects = [
        {
            id: 1,
            name: "MetalPlates",
            unitPrice: 7,
            salePrice: 10,
            unitSold: 9,
            url: metalPlates
        },
        {
            id: 2,
            name: "Dumbells",
            unitPrice: 9,
            salePrice: 15,
            unitsSold: 3,
            url: dumbel 
        },  {
          id: 3,
            name: "T-Shirt",
            unitPrice: 9,
            salePrice: 12,
            unitsSold: 6,
            url: shirt 
      },
      {
            id: 4,
            name: "Trouser",
            unitPrice: 9,
            salePrice: 13,
            unitsSold: 7,
            url: trouser 
      },
      {
          id: 5,
            name: " Protine 500g",
            unitPrice: 47,
            salePrice: 50,
            unitsSold: 11,
            url: wheyProtein
      },
      {
            id: 6,
            name: "Creatine 50g",
            unitPrice: 13,
            salePrice: 19,
            unitsSold: 1,
            url: creatine
      }
    ]
    var Clothes = [
     
    ]
  return (
    <>
    
  {
    objects.map(objectt => (
        <div id="card" className="card"  style={{backgroundColor: "rgb(120, 120, 120)",width:"4vw", height: "45vh", marginTop:"2vh", marginRight: "1vh", flex:"1", alignContent: "center", borderRadius:"3vh"}}>
  <img src= {objectt.url} className="card-img-top" alt="not showing  " style={{height: "17vh", width:"12vw", marginLeft: "2vw", marginTop:"1vh"}}/>
  <div className="card-body" style={{alignItems: "center"}}>
    <h5 className="card-title " style={{color: "white"}}>{objectt.name} <span class="badge rounded-pill bg-danger" style={{fontSize:"0.7vw"}}>Hot Selling</span></h5>
    <p className="card-text">
  {objectt.name} {objectt.name === "Metal Plates" || objectt.name === "Dumbells" ? "for Sale per KG" : "for Sale"}
    </p>
  </div>
  <ul className="list-group list-group-flush" style={{backgroundColor: "black"}}>
    <li className="list-group-item" style={{height:"4vh", backgroundColor:"" }}>Price - <strong>{objectt.salePrice} SAR</strong></li>
     
  </ul>
  <div className="card-body">
    <a href="#" className="btn btn-outline-dark" style={{textDecoration:"none"}}>Buy Now</a>
    <a className="btn btn-outline-primary" href="#" style={{ marginLeft: "1vw"}}><img src={cart} style={{width:"3vw"}}></img> </a>
  </div>
</div>   
    )
    
    )
  }
    </>
  )
}

export default HotSelling