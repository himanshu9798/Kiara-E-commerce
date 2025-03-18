import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';



function Cart() {
  const [cartItems, setCartItems] = useState([]);
  // const [countitems,setCountitems]=useState("")
  const navigate = useNavigate();

//to get data from local storage
  useEffect(() => {

    const storedCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    setCartItems(storedCartData);
  }, []);

  const handleRemoveItem = (productId) => {
   
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    
 
    setCartItems(updatedCartItems);
    localStorage.setItem("cartData", JSON.stringify(updatedCartItems));
  };

  const calculateTotalQuantity = () => {
    // const countOfCart = cartItems.length;
    // setCountitems(countOfCart);
    return cartItems.length; 
  };
const order=()=>{
  navigate("/order")
}
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2); 
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div>
          <table cellPadding={0} cellSpacing={10} style={{ width: "100%", cursor: "pointer" }}>
            {cartItems.map((item) => (
              <tr key={item.id} style={{ display: "flex", marginBottom: "10px" }}>
                <td style={{ width: "20%" }}>
                  <img src={item.image} alt={item.title} style={{ width: '80px', height: '50px' }} />
                </td>
                <td style={{ width: "50%" }}>
                  <h3>{item.title}</h3>
                </td>
                <td style={{ width: "20%" }}>
                  <p>${item.price}</p>
                </td>
                <td style={{ width: "10%" }}>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    style={{
                      backgroundColor: "#dc3545",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>

          {/* Display the total quantity and price */}
          <div style={{ textAlign: "right", marginTop: "20px",marginRight:"30px" }}>
          <div 
      style={{
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '20px auto',
        textAlign: 'center'
      }}
    >
      <h3 
        style={{
          fontFamily: 'Arial, sans-serif',
          color: '#3498db',
          fontWeight: '500',
          margin: '10px 0',
          fontSize: '1.2rem'
        }}
      >
        Total Quantity: 
        <span style={{ fontWeight: 'bold' }}>
          {calculateTotalQuantity()}
        </span>
      </h3>
      <h3 
        style={{
          fontFamily: 'Arial, sans-serif',
          color: '#e74c3c',
          fontSize: '1.5rem',
          fontWeight: '600',
          margin: '10px 0'
        }}
      >
        Total Price: $ 
        <span style={{ fontWeight: 'bold' }}>
          {calculateTotalPrice()}
        </span>
      </h3>
    </div>
    <button 
      style={{
        backgroundColor: "#28a745",
        border: "none",
        outline: "none",
        width: "100px",
        height: "50px",
        color: "white",
        fontSize: "25px",
        padding: "0",
        fontWeight: "700"
      }}
      onClick={order}
      
    >
      Order
    </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
