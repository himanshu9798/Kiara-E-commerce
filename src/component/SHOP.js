import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'; // Correct import

import 'sweetalert2/src/sweetalert2.scss'; // Import SweetAlert2 styles

function SHOP() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAddToCart = (product) => {
    // Get the existing cart data from localStorage or initialize to empty array
    const existingCartData = JSON.parse(localStorage.getItem("cartData")) || [];

    // Add the new product to the cart
    const updatedCartData = [...existingCartData, product];

    // Store the updated cart in localStorage
    localStorage.setItem("cartData", JSON.stringify(updatedCartData));

    // Show SweetAlert2 pop-up
    Swal.fire({
      title: "Do you want to add in cart",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Add",
      denyButtonText: `Don't Add`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Added!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Items are not Added",);
      }
    });
  };

  return (
    <div className="card" style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>Product List</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between" }}>
        {data.map((product) => (
          <div
            key={product.id}
            style={{
              width: "200px",
              marginLeft: "10px",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "8px",
                objectFit: "cover",
                transform:"none",
                
              }}
              src={product.image}
              alt={product.title}
            />
            <h3 style={{ fontSize: "16px", margin: "10px 0", fontWeight: "600",height:"120px" }}>{product.title}</h3>
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Price: ${product.price}</p>
            <button
              style={{
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                padding: "10px",
                width: "100%",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "14px",
                marginTop: "10px",
                transition: "background-color 0.3s ease",
              }}
              onClick={() => handleAddToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SHOP;
