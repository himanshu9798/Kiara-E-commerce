import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'; // Correct import
import { useNavigate } from 'react-router-dom';

import 'sweetalert2/src/sweetalert2.scss'; // Import SweetAlert2 styles

function Payment() {
  const [cartItems, setCartItems] = useState([]);
  
  const [paymentMethod, setPaymentMethod] = useState('card'); // Default is card payment
  const navigate=useNavigate();

  // Fetch cart data and calculate total price from localStorage
  
   useEffect(() => {
  
      const storedCartData = JSON.parse(localStorage.getItem("cartData")) || [];
      setCartItems(storedCartData);
    }, []);

  // Handle payment method change
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2); 
  };

  function payment() {
    const inputs = document.querySelectorAll('input');
    
    for (let input of inputs) {
      if (input.value.trim() === "") {
        Swal.fire({
          title: "Oops!",
          text: "Please fill in all fields.",
          icon: "warning",
          confirmButtonText: "OK"
        });
        return;
      }
    }
  
    Swal.fire({
      title: "Hurray.............",
      text: "Order Successfully placed!",
      imageUrl: "https://cdn.dribbble.com/userupload/15097592/file/original-11af0dab65a0913fe4ea1d71d9d48f4a.gif",
      imageWidth: 600,
      imageHeight: 300,
      imageAlt: "Custom image"
    }).then(() => {
        // Reload the page when the OK button is clicked
        navigate('/');
    });
  
    
  }
  

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Page</h2>
      <div style={styles.summaryBox}>
        <h3 style={styles.totalPrice}>
          Total Price: $<span style={styles.bold}>{calculateTotalPrice()}</span>
        </h3>
      </div>
      
      {/* Payment Method Selection */}
      <div style={styles.paymentMethodBox}>
        <h3 style={styles.paymentMethodHeading}>Choose Payment Method</h3>
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={handlePaymentMethodChange}
              style={styles.radioInput}
            />
            Credit/Debit Card
          </label>
        </div>
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={handlePaymentMethodChange}
              style={styles.radioInput}
            />
            Cash on Delivery
          </label>
        </div>
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={handlePaymentMethodChange}
              style={styles.radioInput}
            />
            UPI Payment
          </label>
        </div>
      </div>

      {/* Conditional Form Based on Payment Method */}
      {paymentMethod === 'card' && (
        <form style={styles.form}>
          <label style={styles.label}>
            Name on Card:
            <input type="text" placeholder="Enter your name" style={styles.input} required />
          </label>
          <label style={styles.label}>
            Card Number:
            <input type="text" placeholder="Enter card number" style={styles.input} required />
          </label>
          <label style={styles.label}>
            Expiry Date:
            <input type="month" style={styles.input} required />
          </label>
          <label style={styles.label}>
            CVV:
            <input type="password" placeholder="Enter CVV" style={styles.input} required />
          </label>
          
          <button onClick={payment} type="submit" style={styles.button}>Pay Now</button>
        </form>
      )}

      {paymentMethod === 'cod' && (
        <div style={styles.codBox}>
          <p style={styles.paymentInfo}>You have selected Cash on Delivery. Please ensure you have enough cash available at the time of delivery.</p>
          <button onClick={payment} style={styles.button}>Confirm COD</button>
        </div>
      )}

      {paymentMethod === 'upi' && (
        <form style={styles.form}>
          <label style={styles.label}>
            UPI ID:
            <input type="text" placeholder="Enter your UPI ID" style={styles.input} required />
          </label>
          
          <button  onClick={payment} type="submit" style={styles.button}>Pay via UPI</button>
        </form>
      )}
    </div>
  );
}

// Inline CSS for styling the components
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '5% auto',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  summaryBox: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '30px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    textAlign: 'center',
  },
  totalPrice: {
    fontSize: '22px',
    color: '#3498db',
  },
  bold: {
    fontWeight: 'bold',
  },
  paymentMethodBox: {
    marginBottom: '30px',
  },
  paymentMethodHeading: {
    fontSize: '22px',
    color: '#333',
    marginBottom: '10px',
    fontWeight: '600',
  },
  radioGroup: {
    marginBottom: '15px',
  },
  radioLabel: {
    fontSize: '16px',
    marginBottom: '5px',
    display: 'block',
    color: '#555',
  },
  radioInput: {
    marginRight: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%',
  },
  label: {
    fontSize: '16px',
    color: '#333',
    fontWeight: '500',
  },
  input: {
    padding: '12px',
    fontSize: '14px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    width: '100%',
    marginTop: '5px',
  },
  button: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  buttonHover: {
    backgroundColor: '#2980b9',
  },
  codBox: {
    textAlign: 'center',
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  paymentInfo: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '15px',
  },
};

export default Payment;
