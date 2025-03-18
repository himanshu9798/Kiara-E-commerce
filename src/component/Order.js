import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Order() {
  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    postalCode: "",
    contactno: "",
  });
  const navigate=useNavigate();

  // to get data from localStorage
  useEffect(() => {
    const storedCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    setCartItems(storedCartData);

    console.log(storedCartData); // Logs the data from localStorage
  }, []);
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  // Submit handler (e.g., for submitting the order with address)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address Submitted: ", address);

    // Save the address in localStorage
    localStorage.setItem("userAddress", JSON.stringify(address));

    // Optionally, you can give the user a confirmation that the address has been saved
    alert("Address saved successfully!");
    navigate('/finalorder')
  };

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
      <h2 style={{ textAlign: "center" }}>Order Details</h2>
      {/* Render the cart items */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{marginLeft:"3%"}}>
          <h1 style={{ textAlign: "center" }}>Your Selected Products</h1>
          <ul style={{ display: "inline", width: "50%" }}>
            <table
              border={1}
              style={{ width: "100%", borderCollapse: "collapse",borderRadius:"10px",boxShadow:"5px 5px 25px gray" }}
            >
              <thead>
                <tr>
                  <th style={{ width: "80%" }}>Title</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        width: "80%",
                        padding: "8px",
                        textAlign: "left",
                      }}
                    >
                      {item.index}{item.title}
                    </td>
                    <td style={{ padding: "8px", textAlign: "center" }}>
                      <b>${item.price}</b>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ul>

          <h3
            style={{
              fontFamily: "Arial, sans-serif",
              color: "#3498db",
              fontWeight: "500",
              margin: "10px 0",
              fontSize: "1.2rem",
              textAlign:"center"
            }}
          >
            Total Quantity:
            <span style={{ fontWeight: "bold" }}>
              {calculateTotalQuantity()}
            </span>
          </h3>
          <h3
            style={{
              fontFamily: "Arial, sans-serif",
              color: "#e74c3c",
              fontSize: "1.5rem",
              fontWeight: "600",
              margin: "10px 0",
              textAlign:"center"
            }}
          >
            Total Price: $
            <span style={{ fontWeight: "bold" }}>{calculateTotalPrice()}</span>
          </h3>
        </div>
        <div style={{ width: "40%", marginRight: "3%" }}>
          <div style={{ width: "100%" }}>
            <h1 style={{ textAlign: "center" }}>Your Address Details</h1>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "10px" }}>
                <label
                  htmlFor="street"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Street Address:
                </label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={address.street}
                  onChange={handleAddressChange}
                  placeholder="Enter your street address"
                  required
                  style={{ width: "95%", padding: "8px", fontSize: "16px" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label
                  htmlFor="city"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={address.city}
                  onChange={handleAddressChange}
                  placeholder="Enter your city"
                  required
                  style={{ width: "95%", padding: "8px", fontSize: "16px" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label
                  htmlFor="state"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  State:
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={address.state}
                  onChange={handleAddressChange}
                  placeholder="Enter your state"
                  required
                  style={{ width: "95%", padding: "8px", fontSize: "16px" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label
                  htmlFor="postalCode"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Postal Code:
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={address.postalCode}
                  onChange={handleAddressChange}
                  placeholder="Enter your postal code"
                  required
                  style={{ width: "95%", padding: "8px", fontSize: "16px" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label
                  htmlFor="postalCode"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Contact No:
                </label>
                <input
                  type="text"
                  id="contactno"
                  name="contactno"
                  value={address.contactno}
                  onChange={handleAddressChange}
                  placeholder="Enter your Contact No"
                  required
                  style={{ width: "95%", padding: "8px", fontSize: "16px" }}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                    borderRadius: "5px",
                  }}
                >
                  Submit Address
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
