import React from 'react'

import "./header.css";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import img1 from '../images/banner-image-6.jpg'
import img2 from '../images/banner-image-1.jpg'
import img3 from '../images/banner-image-2.jpg'

function Main() {
  return (
    <div style={{backgroundColor:" #f1f1f0",marginTop:"-140px"}}>
       <div className="main" style={{backgroundColor:" #f1f1f0"}}>
        <h1 style={{ textAlign: "center",marginTop:"10%",fontSize:"44px" ,textShadow:"1px 1px 5px  plum"}}>New Collections</h1>
        <p style={{textAlign:"center",alignItems:"justify", color:"gray"
            ,marginLeft:"25%",marginRight:"25%",letterSpacing:"1px",textTransform:"capitalize",
            textShadow:"1px 1px 5px white"
        }}>
        This season's collection brings a fresh twist on timeless classics, with innovative designs and premium materials. Each piece is crafted to make you feel confident and stylish, no matter the occasion. With colors, cuts, and fabrics that complement every personality, you can easily refresh your look and stand out.
        </p>
      </div>
     <div style={{display:"flex",justifyContent:"space-between",gap:"50px"}}>
      <div className="arrow1"><FaArrowLeft className="arrow" style={{position:"relative",top:"25%"}}  /></div>
      <div className="arrow1"><FaArrowRight className="arrow" style={{position:"relative",top:"25%"}}/>
      </div>
      </div>
      <div style={{display:"flex",marginLeft:"10%",marginRight:"7%",justifyContent:"space-between"}}>
        <div style={{display:"inline"}}>
            <img style={{width:"80%"}} src={img1} alt=""></img>
            
          <h3 className="discover1">Soft leather jackets</h3>
          <p style={{color:"gray",textAlign:"justify"}}>Not only do our soft leather jackets<br/> feel amazing, but they are also built<br/> to stand the test of time.</p>
         <h4  className="discover">Discover Now</h4>

        </div>
        <div style={{display:"inline"}}>
            
        <img style={{width:"80%"}} src={img2} alt=""></img>
         <h3 className="discover1"  >Soft leather jackets</h3>
         <p style={{color:"gray",textAlign:"justify"}}>Leather jackets have long been a symbol of<br/> rugged sophistication and timeless<br/> style, and our soft collection</p>

         <h4  className="discover">Discover Now</h4>
        </div>
        <div style={{display:"inline"}}>
        <img style={{width:"80%"}} src={img3} alt=""></img>
        <h3 className="discover1">Soft leather jackets</h3>
        <p style={{color:"gray",textAlign:"justify",marginLeft:"20px"}}>Our soft leather jackets are designed <br/>to offer you the perfect combination<br/> of comfort, durability, and style.</p>
        <h4 className="discover">Discover Now</h4>
        </div>
      </div>
     
    </div>
  )
}

export default Main
