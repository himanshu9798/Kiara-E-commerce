import React from "react";
import "./content.css";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { FaGift } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { FaCalendar } from "react-icons/fa";
import img4 from "../images/cat-item1.jpg";
import img5 from "../images/cat-item2.jpg";
import img6 from "../images/cat-item3.jpg";
import img7 from "../images/product-item-1.jpg";
import img8 from "../images/product-item-2.jpg";
import img9 from "../images/product-item-3.jpg";
import img10 from "../images/product-item-4.jpg";
import img11 from "../images/single-image-2.jpg";
import img12 from "../images/product-item-5.jpg";
import img13 from "../images/product-item-6.jpg";
import img14 from "../images/product-item-7.jpg";
import img15 from "../images/product-item-8.jpg";
import img16 from "../images/text-pattern.png";
import Compliment from "./Compliment";
import img17 from "../images/post-large-image1.jpg";
import img18 from "../images/post-large-image2.jpg";
import img19 from "../images/post-large-image3.jpg";
import img20 from "../images/logo1.png";
import img21 from "../images/logo2.png";
import img22 from "../images/logo3.png";
import img23 from "../images/logo4.png";
import img24 from "../images/logo5.png";
import img25 from "../images/pattern-bg.png";
import img26 from '../images/insta-item1.jpg';
import img27 from '../images/insta-item2.jpg'
import img28 from '../images/insta-item3.jpg'
import img29 from '../images/insta-item4.jpg'
import img30 from '../images/insta-item5.jpg'
import img31 from '../images/insta-item6.jpg'

function Content() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10%",
          gap: "30px",
        }}
      >
        <div>
          <FaCalendar
            className="icon"
            style={{ fontSize: "30px", marginLeft: "50%" }}
          />
          <h3 style={{ textAlign: "center" }}>Book An AppointMent</h3>
          <p style={{ textAlign: "center", color: "gray" }}>
            "Schedule an appointment with us to receive tailored assistance,
            expert advice, and the best services tailored to your needs."
          </p>
        </div>
        <div>
          <IoBagOutline
            className="icon"
            style={{ fontSize: "30px", marginLeft: "50%" }}
          />
          <h3 style={{ textAlign: "center" }}>Pick up in store</h3>
          <p style={{ textAlign: "center", color: "gray" }}>
            "Choose 'Pick Up in Store' at checkout and collect your order
            directly from our store at your convenience."
          </p>
        </div>
        <div>
          <FaGift
            className="icon"
            style={{ fontSize: "30px", marginLeft: "50%" }}
          />
          <h3 style={{ textAlign: "center" }}>Special packaging</h3>
          <p style={{ textAlign: "center", color: "gray" }}>
            "Choose our special packaging option for a beautifully wrapped
            product, ensuring your purchase arrives in perfect condition and
            style."
          </p>
        </div>
        <div>
          <LuRefreshCcw
            className="icon"
            style={{ fontSize: "30px", marginLeft: "50%" }}
          />
          <h3 style={{ textAlign: "center" }}>free global returns</h3>
          <p style={{ textAlign: "center", color: "gray" }}>
            "Enjoy free global returns on all orders, ensuring a hassle-free
            shopping experience. Return your purchase easily from anywhere
            worldwide."
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          justifyItems: "flex-start",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <div>
          <img style={{ width: "95%" }} src={img4} alt=" "></img>
          <h5
            style={{
              color: "gray",
              position: "relative",
              left: "10px",
              top: "-20px",
            }}
          >
            SHOP FOR MEN
          </h5>
        </div>
        <div>
          <img style={{ width: "95%" }} src={img5} alt=" "></img>
          <h5
            style={{
              color: "gray",
              position: "relative",
              left: "10px",
              top: "-20px",
            }}
          >
            SHOP FOR WOMEN
          </h5>
        </div>
        <div>
          <img style={{ width: "95%" }} src={img6} alt=" "></img>
          <h5
            style={{
              color: "gray",
              position: "relative",
              left: "10px",
              top: "-20px",
            }}
          >
            SHOP ACCESSORIES
          </h5>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "50px",
        }}
      >
        <h1>Our New Arrivals</h1>
        <p className="discover2">
          <u>View All Products</u>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <div>
          <img
            className="image"
            style={{ width: "80%" }}
            src={img10}
            alt=""
          ></img>
          <h3>
            Dark florish
            <br /> onepiece
          </h3>
          <p style={{ fontSize: "20px", color: "gray", marginTop: "-20px" }}>
            $95.00
          </p>
        </div>
        <div>
          <img
            className="image"
            style={{ width: "80%" }}
            src={img9}
            alt=""
          ></img>
          <h3>Baggy Shirt</h3>
          <p style={{ fontSize: "20px", color: "gray", marginTop: "-20px" }}>
            $55.00{" "}
          </p>
        </div>
        <div>
          <img
            className="image"
            style={{ width: "80%" }}
            src={img8}
            alt=""
          ></img>
          <h3>
            Cotton off-white
            <br /> shirt
          </h3>
          <p style={{ fontSize: "20px", color: "gray", marginTop: "-20px" }}>
            $65.00{" "}
          </p>
        </div>
        <div>
          <img
            className="image"
            style={{ width: "80%" }}
            src={img7}
            alt=""
          ></img>
          <h3>Crop sweater</h3>
          <p style={{ fontSize: "20px", color: "gray", marginTop: "-20px" }}>
            $80.00{" "}
          </p>
        </div>
      </div>

      <div
        style={{ display: "flex", width: "100%", backgroundColor: "#f1f1f0" }}
      >
        <div style={{ display: "flex", margin: "10%" }}>
          <img
            style={{ width: "50%", height: "500px", transform: "none" }}
            src={img11}
            alt=""
          ></img>
          <div
            style={{ backgroundColor: "white", height: "650px", width: "80%" }}
          >
            <h1
              style={{
                margin: "10%",
                fontSize: "50px",
                textAlign: "center",
                lineHeight: "45px",
              }}
            >
              Classic winter <br />
              collection
            </h1>
            <p style={{ margin: "10%", textAlign: "justify", color: "gray" }}>
              The classic winter collection exudes timeless elegance and warmth,
              featuring luxurious fabrics and versatile designs perfect for the
              chilly season. Rich woolen coats, cozy knitted sweaters, and soft
              scarves are staples that effortlessly blend comfort with style.
              Neutral tones like deep navy, charcoal, and ivory dominate the
              color palette, ensuring each piece complements any wardrobe.
              Textures such as cashmere, tweed, and faux fur add depth and
              sophistication, while tailored fits create a flattering
              silhouette. This collection offers not only protection against the
              cold but also an elevated sense of fashion, making it essential
              for winter's embrace.
            </p>
            <button
              style={{
                marginLeft: "10%",
                backgroundColor: "black",
                color: "white",
                border: "none",
                outline: "none",
                height: "50px",
                padding: "1%",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              SHOP COLLECTION
            </button>
          </div>
        </div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "50px",
          }}
        >
          <h1>Best Selling Items</h1>
          <p className="discover2">
            <u>View All Products</u>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          <div>
            <img
              className="image"
              style={{ width: "80%" }}
              src={img12}
              alt=""
            ></img>
            <h3>
              Dark florish
              <br /> onepiece
            </h3>
            <p style={{ fontSize: "20px", color: "gray", marginTop: "-20px" }}>
              $95.00
            </p>
          </div>
          <div>
            <img
              className="image"
              style={{ width: "80%" }}
              src={img13}
              alt=""
            ></img>
            <h3>Baggy Shirt</h3>
            <p style={{ fontSize: "20px", color: "gray", marginTop: "-20px" }}>
              $55.00{" "}
            </p>
          </div>
          <div>
            <img
              className="image"
              style={{ width: "80%" }}
              src={img14}
              alt=""
            ></img>
            <h3>
              Cotton off-white
              <br /> shirt
            </h3>
            <p style={{ fontSize: "20px", color: "gray", marginTop: "-20px" }}>
              $65.00{" "}
            </p>
          </div>
          <div>
            <img
              className="image"
              style={{ width: "80%" }}
              src={img15}
              alt=""
            ></img>
            <h3>Crop sweater</h3>
            <p style={{ fontSize: "20px", color: "gray", marginTop: "-20px" }}>
              $80.00{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="viedo">
        <img
          className="rotate"
          style={{ position: "relative", top: "35%", left: "40%" }}
          src={img16}
          alt=""
        ></img>
      </div>

      <Compliment></Compliment>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "50px",
          }}
        >
          <h1>You May Also Like</h1>
          <p className="discover2">
            <u>View All Products</u>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          <div>
            <img
              className="image"
              style={{ width: "80%" }}
              src={img12}
              alt=""
            ></img>
            <h3>
              Dark florish
              <br /> onepiece
            </h3>
            <p style={{ fontSize: "20px", color: "gray", marginTop: "-20px" }}>
              $95.00
            </p>
          </div>
          <div>
            <img
              className="image"
              style={{ width: "80%" }}
              src={img13}
              alt=""
            ></img>
            <h3>Baggy Shirt</h3>
            <p style={{ fontSize: "20px", color: "gray", marginTop: "-20px" }}>
              $55.00{" "}
            </p>
          </div>
          <div>
            <img
              className="image"
              style={{ width: "80%" }}
              src={img14}
              alt=""
            ></img>
            <h3>
              Cotton off-white
              <br /> shirt
            </h3>
            <p style={{ fontSize: "20px", color: "gray", marginTop: "-20px" }}>
              $65.00{" "}
            </p>
          </div>
          <div>
            <img
              className="image"
              style={{ width: "80%" }}
              src={img15}
              alt=""
            ></img>
            <h3>Crop sweater</h3>
            <p style={{ fontSize: "20px", color: "gray", marginTop: "-20px" }}>
              $80.00{" "}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "10%",
            marginRight: "10%",
          }}
        >
          <h1>Read Blog Post</h1>
          <p className="discover2">
            <u>View All </u>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "8%",
          }}
        >
          <div>
            <img
              className="image"
              style={{ width: "80%" }}
              src={img17}
              alt=""
            ></img>
            <p style={{ fontSize: "20px", color: "gray", marginTop: "5px" }}>
              Fashion / jul 11, 2022
            </p>
            <h3>How to look outstanding in pastel</h3>
            <p style={{ color: "gray" }}>
              Embrace soft hues, combine neutrals,
              <br /> and add bold accessories confidently......
            </p>
          </div>
          <div>
            <img
              className="image"
              style={{ width: "80%" }}
              src={img18}
              alt=""
            ></img>

            <p style={{ fontSize: "20px", color: "gray", marginTop: "5px" }}>
              Fashion / jul 11, 2021{" "}
            </p>
            <h3>Top 10 fashion trend for summer </h3>
            <p style={{ color: "gray" }}>
              Bright colors, flowy dresses, linen, crochet, <br />
              platform sandals, sustainability........
            </p>
          </div>
          <div>
            <img
              className="image"
              style={{ width: "80%" }}
              src={img19}
              alt=""
            ></img>

            <p style={{ fontSize: "20px", color: "gray", marginTop: "5px" }}>
              Fashion / may 11, 2023{" "}
            </p>
            <h3>Crazy fashion with unique moment</h3>
            <p style={{ color: "gray" }}>
              Bold designs, unexpected combinations, and
              <br /> expressive styles create unforgettable
              <br /> moments........
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          gap: "6%",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <img style={{ width: "30%" }} src={img20} alt=""></img>
        <img style={{ width: "30%" }} src={img21} alt=""></img>
        <img style={{ width: "30%" }} src={img22} alt=""></img>
        <img style={{ width: "30%" }} src={img23} alt=""></img>
        <img style={{ width: "30%" }} src={img24} alt=""></img>
      </div>
      <br />
      <br />

      <div style={{ backgroundColor: " #f1f1f0",height:"600px" }}>
        <img
          style={{ transform: "none", width: "100%" }}
          src={img25}
          alt=""
        ></img>
        <div
          style={{ position: "relative", top: "-300px", marginLeft: "360px" }}
        >
          <h1 style={{ fontSize: "44px" }}>Sign Up for our newsletter</h1>
          <input
            style={{
              width: "60%",
              height: "40px",
              borderRadius: "5px",
              outline: "none",
              border: "none",
            }}
            type="text"
            placeholder="Enter your Gmail Address"
          ></input>
          <br />
          <br />
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
              outline: "none",
              width: "60%",
              height: "40px",
              fontSize: "25px",
            }}
          >
            Sign Up
          </button>
        </div>
        <div style={{display:"flex",position:"relative",top:"-200px"}}>
          <img style={{width:"16.6%",transform:"none"}} src={img26} alt=''></img>
          <img  style={{width:"16.6%",transform:"none"}}src={img27} alt=''></img>
          <img style={{width:"16.6%",transform:"none"}} src={img28} alt=''></img>
          <img  style={{width:"16.6%",transform:"none"}}src={img29} alt=''></img>
          <img style={{width:"16.6%",transform:"none"}} src={img30} alt=''></img>
          <img style={{width:"16.6%",transform:"none"}} src={img31} alt=''></img>

        </div>
      </div>
     
      <div>
      
      <button style={{border:"none",outline:"none",backgroundColor:"black",
        color:"white",width:"20%",
        height:"40px",fontSize:"20px",
        position:"relative",
        left:"40%",
        top:"-20px",
        
      }}>
          <b>Follow On Instagram</b> 
      </button>
  
      </div>
    
    </div>
  );
}

export default Content;
