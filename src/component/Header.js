import React from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import "./header.css";
import { FaSearch } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import img1 from '../images/banner-image-6.jpg'
import img2 from '../images/banner-image-1.jpg'
import img3 from '../images/banner-image-2.jpg'
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

function Header() {
  const [cartItems, setCartItems] = useState([]);
   useEffect(() => {
  
      const storedCartData = JSON.parse(localStorage.getItem("cartData")) || [];
      setCartItems(storedCartData);
    }, []);
    const calculateTotalQuantity = () => {
      // const countOfCart = cartItems.length;
      // setCountitems(countOfCart);
      return cartItems.length; 
    };
  return (
    <div style={{ backgroundColor: "#f1f1f0" }}>
      <div className="header">
        <h1>Kiara</h1>

        <ul>
          <Link to='/'>
          <li>
            Home
            <div class="tooltip">
              <MdOutlineExpandMore
                style={{ position: "relative", top: "8px", left: "-2px" }}
              />
              <span class="tooltiptext">
                <li>Home layOut1</li>
                <li>Home Layout2</li>
                <li>Home Layout3</li>
                <li>Home Layout4</li>
              </span>
            </div>
          </li>
          </Link>
          <Link to='/shop'>
          <li>
            Shop
            <div class="tooltip">
              <MdOutlineExpandMore
                style={{ position: "relative", top: "8px", left: "-2px" }}
              />
              <span class="tooltiptext">
                <li>SHOP SIDEBAR</li>
                <li>SHOP THREE COLUMN</li>
                <li>SHOP THREE COLUMN WIDE</li>
                <li>SHOP FOUR COLUMN</li>
                <li>SHOP FOUR COLUMN WIDE</li>
                <li>SHOP SIX COLUMN</li>
                <li>SHOP SIX COLUMN WIDE</li>
                <li>SINGLE PRODUCT</li>
                <li>SINGLE PRODUCT V2</li>
              </span>
            </div>
          </li>
          </Link>
          <li>
            Blog
            <div class="tooltip">
              <MdOutlineExpandMore
                style={{ position: "relative", top: "8px", left: "-2px" }}
              />
              <span class="tooltiptext">
                <li>BLOG CLASSIC</li>
                <li>BLOG GRID WITH SIDEBAR</li>
                <li>BLOG GRID FOUR COLUMN</li>
                <li>BLOG NO SIDEBAR</li>
                <li>BLOG RIGHT SIDEBAR</li>
                <li>SINGLE POST</li>
                <li>SINGLE POST NO SIDEBAR</li>
              </span>
            </div>
          </li>
          <li>
            Pages
            <div class="tooltip">
              <MdOutlineExpandMore
                style={{ position: "relative", top: "8px", left: "-2px" }}
              />
              <span class="tooltiptext">
                <li>ABOUT</li>
                <li>CART</li>
                <li>CHECKOUT</li>
                <li>COMING SOON</li>
                <li>CONTACT</li>
                <li>ERROR PAGE</li>
                <li>FAQS</li>
                <li>MY ACCOUNT</li>
                <li>ORDER TRACKING</li>
                <li>WISHLIST</li>
              </span>
            </div>
          </li>
          <Link to='/contact'>
          <li>
            Contact
           
          </li>
          </Link>
          <Link to="/product">
          <li>Products</li></Link>
        </ul>
        <ul style={{ position: "relative", left: "100px" }}>
          <Link to='/cart'>
          <li>Whilist({calculateTotalQuantity()})</li>
          </Link>
          <li>
            <FaSearch />
          </li>
        </ul>
      </div>
 
    </div>
  );
}

export default Header;
