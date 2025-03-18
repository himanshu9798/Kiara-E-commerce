import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function FinalOrder() {
  const [cartItems, setCartItems] = useState([]);
  const [userAddress, setUserAddress] = useState(null);
  const navigate=useNavigate();

  // Fetch cart data and user address from localStorage
  useEffect(() => {
    const storedCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const storedUserAddress = JSON.parse(localStorage.getItem("userAddress"));

    setCartItems(storedCartData);
    setUserAddress(storedUserAddress);

    console.log(storedCartData); // Logs the cart data from localStorage
    console.log(storedUserAddress); // Logs the user address from localStorage
  }, []);
  const calculateTotalQuantity = () => {
    // const countOfCart = cartItems.length;
    // setCountitems(countOfCart);
    return cartItems.length; 
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2); 
  };

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Order Summary...............</h1>
<div style={{display:"flex",flexShrink:"5"}}>
    <div className='card' style={{marginLeft:"100px",width:"300px",boxShadow:"5px 5px 25px gray",borderRadius:"10px",textAlign:"center"}}>
      {/* Display user address if available */}
      {userAddress ? (
        <div style={{ marginBottom: "20px" }}>
          <h3>Shipping Address</h3>
          <p><strong>Street:</strong> {userAddress.street}</p>
          <p><strong>City:</strong> {userAddress.city}</p>
          <p><strong>State:</strong> {userAddress.state}</p>
          <p><strong>Postal Code:</strong> {userAddress.postalCode}</p>
          <p><strong>Phone No:</strong> {userAddress.contactno}</p>
        </div>
      ) : (
        <p>No address found</p>
      )}
      </div>
      <div className='card' style={{marginLeft:"300px",width:"300px",boxShadow:"5px 5px 20px black",textAlign:"center",
        borderRadius:"8px"
      }}>
        <h1>Shipping Details</h1>

      {/* Display cart items */}
      {cartItems.length > 0 ? (
  <ul>

    <h3 
      style={{
        fontFamily: 'Arial, sans-serif',
        color: '#3498db',
        fontWeight: '500',
        marginLeft:"-80px",
        fontSize: '1.2rem'
      }}
    >
      Total Quantity: 
      <span style={{ fontWeight: 'bold' }}>
        {calculateTotalQuantity()}
      </span>
    </h3>
    <br/>
    <br/>
    <br/>
    <h3  className=''
      style={{
        fontFamily: 'Arial, sans-serif',
        color: '#e74c3c',
        position:"relative",
        marginLeft:"-500px",
        left:"-20px",
        fontWeight: '600',
        marginTop:"50px"
        
      }}
    >
      Total Price: $ 
      <span style={{ fontWeight: 'bold' }}>
        {calculateTotalPrice()}
      </span>
    </h3>
  </ul>
) : (
  <p>No items in your cart</p>
)}
</div>
</div>
<button 
      style={{
        backgroundColor: '#3498db',  
        color: '#fff',          
       
        fontSize: '25px',      
        fontWeight: '900',      
        border: 'none',        
        borderRadius: '5px',         
        cursor: 'pointer',           
        transition: 'background-color 0.3s ease', 
        display: 'inline-block',     
        marginLeft:"530px",
        width:"180px",
        height:"40px",
        boxShadow:"2px 2px 20px gray"  
         
      }}
      onClick={() => navigate('/payment')}  
    >
      Order
    </button>

    </div>
  );
}

export default FinalOrder;
