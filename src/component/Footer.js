import React from "react";
import logo from "../images/main-logo.png";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import art from "../images/arct-icon.png";
import icon from "../images/dhl-logo.png";
import card from "../images/visa-card.png";
import card1 from "../images/master-card.png";
import card3 from '../images/paypal-card.png'

import "./footer.css";

function Footer() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "3%",
          justifyContent: "space-between",
          height: "auto",
        }}
      >
        <div style={{ display: "inline", width: "300px" }}>
          <img src={logo} alt=""></img>
          <p style={{ textAlign: "justify", color: "gray" }}>
            Kiara E-commerce specializes in offering a stylish collection
            ofclothing for both men and women. The platform features a wide
            variety of trendy apparel, from casual wear to formal
            attire,ensuring there's something for every taste.
          </p>

          <CiFacebook className="facebook" style={{ fontSize: "45px", margin: "10px" }} />
          <CiTwitter className="twitter" style={{ fontSize: "45px", margin: "10px" }} />
          <FaYoutube className="youtube" style={{ fontSize: "45px", margin: "10px" }} />
          <FaInstagram  className="instagram"style={{ fontSize: "45px", margin: "10px" }} />
        </div>
        <div style={{ display: "inline", width: "200px" }}>
          <h4>Quick Link</h4>
        
            <li className="unique">HOME</li>
            <li className="unique">SERVICES</li>
            <li className="unique">SINGLE ITEM</li>
            <li className="unique">CONTACT</li>
        
        </div>
        <div style={{ display: "inline", width: "300px" }}>
          <h3>
            <b>
              <i>Help & Info</i>
            </b>
          </h3>
         <li className="unique">Track Your Order</li>
            <li className="unique">Returns + Exchanges</li>
            <li className="unique">Shipping + Delivery</li>
            <li className="unique">Contact Us</li>
            <li className="unique">Find us easy</li>
            <li className="unique">Faqs</li>
          
        </div>
        <div style={{ display: "inline", width: "200px" }}>
          <h3>
            <b>
              <i>Contact Us</i>
            </b>
          </h3>
          <p style={{ color: "gray" }}>
            Do you have any questions or suggestions?
          </p>
          <p className="discover">contact@yourcompany.com</p>
          <p style={{ color: "gray" }}>
            Do you need support? Give us a call.
            <b className="discover" style={{ color: "black" }}>
              +43720115278
            </b>
          </p>
        </div>
      </div>
      <hr style={{ color: "gray" }}></hr>
      <div style={{ display: "flex" ,justifyContent:"space-between"}}>
        <div
          style={{
            display: "flex",
            marginLeft: "100px",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "gray" }}>
            <b>We ship with:</b>
          </p>
          <img style={{ width: "60px" ,transform:"none",height:"30px",marginTop:"12px"}} src={art} alt=""></img>
          <img style={{ width: "60px" ,transform:"none",height:"30px",marginTop:"12px"}} src={icon} alt=""></img>
          <p style={{ color: "gray" }}>
            <b>Payment Option:</b>
          </p>
          <img
            style={{ width: "40px", height: "30px",transform:"none" ,marginTop:"12px"}}
            src={card1}
            alt=""
          ></img>
          <img
            style={{ width: "40px", height: "30px" ,transform:"none",marginLeft:"5px",marginTop:"12px"}}
            src={card}
            alt=""
          ></img>
           <img
            style={{ width: "40px", height: "30px" ,transform:"none",marginLeft:"5px",marginTop:"12px"}}
            src={card3}
            alt=""
          ></img>
        </div>
        <div style={{color:"gray",marginRight:"80px"}}>
       <p> © Copyright 2022 Kaira. All rights reserved. Design by <br/><i style={{color:"black"}}>TemplatesJungle </i>
       Distribution By <i style={{color:"black"}}>ThemeWagon</i></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
