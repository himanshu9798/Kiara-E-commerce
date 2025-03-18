import React from "react";
import { useState, useEffect } from "react";
import product from "../images/product.png";
import product2 from "../images/man1.jpg";
import product3 from "../images/man2.jpg";
import product4 from "../images/child.jpg";
import post from "../images/post-image6.jpg";
import post1 from "../images/post-image7.jpg";
import post2 from "../images/post-image8.jpg";
import post3 from "../images/post-image9.jpg";
import post4 from "../images/product-item-4.jpg";
import post5 from "../images/product-item-7.jpg";
import post6 from "../images/product-item-8.jpg";
import post7 from "../images/product-item-9.jpg";

function Product() {
  const [img, setImage] = useState(product);
  const images = [product, product2, product3, product4];

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1
        className="card"
        style={{ textAlign: "center", fontSize: "50px", padding: "0" }}
      >
        WelCome To Our Best Products And Best Price
      </h1>
      <img
        style={{ transform: "none", width: "100%", height: "500px" }}
        src={img}
        alt=""
      ></img>
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Our Best collection</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "3%",
        }}
      >
        <div
          style={{
            width: "23%",
            textAlign: "center",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <img
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            src={post1}
            alt="Men's T-shirt"
          />
          <div style={{ padding: "10px" }}>
            <h4 style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Women's T-shirt
            </h4>
            <p style={{ color: "#888", fontSize: "1rem" }}>$29.99</p>
          </div>
        </div>

        <div
          style={{
            width: "23%",
            textAlign: "center",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <img
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            src={post}
            alt="Women's Dress"
          />
          <div style={{ padding: "10px" }}>
            <h4 style={{ fontSize: "1rem", fontWeight: "bold" }}>SunGlasses</h4>
            <p style={{ color: "#888", fontSize: "1rem" }}>$49.99</p>
          </div>
        </div>

        <div
          style={{
            width: "23%",
            textAlign: "center",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <img
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            src={post2}
            alt="Men's Jacket"
          />
          <div style={{ padding: "10px" }}>
            <h4 style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Women's Skirt
            </h4>
            <p style={{ color: "#888", fontSize: "1rem" }}>$79.99</p>
          </div>
        </div>

        <div
          style={{
            width: "23%",
            textAlign: "center",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <img
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            src={post3}
            alt="Women's Blouse"
          />
          <div style={{ padding: "10px" }}>
            <h4 style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Women's Shirt
            </h4>
            <p style={{ color: "#888", fontSize: "1rem" }}>$39.99</p>
          </div>
        </div>
      </div>

      <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2%" }}>
        Top Selling Products
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1%",
        }}
      >
        <div
          style={{
            width: "23%",
            textAlign: "center",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <img
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            src={post4}
            alt="Men's Jeans"
          />
          <div style={{ padding: "10px" }}>
            <h4 style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Men's T-shirt
            </h4>
            <p style={{ color: "#888", fontSize: "1rem" }}>$59.99</p>
          </div>
        </div>

        <div
          style={{
            width: "23%",
            textAlign: "center",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <img
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            src={post5}
            alt="Women's Skirt"
          />
          <div style={{ padding: "10px" }}>
            <h4 style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Women's Skirt
            </h4>
            <p style={{ color: "#888", fontSize: "1rem" }}>$24.99</p>
          </div>
        </div>

        <div
          style={{
            width: "23%",
            textAlign: "center",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <img
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            src={post6}
            alt="Men's Hoodie"
          />
          <div style={{ padding: "10px" }}>
            <h4 style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Men's Hoodie
            </h4>
            <p style={{ color: "#888", fontSize: "1rem" }}>$49.99</p>
          </div>
        </div>

        <div
          style={{
            width: "23%",
            textAlign: "center",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <img
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            src={post7}
            alt="Women's Sweater"
          />
          <div style={{ padding: "10px" }}>
            <h4 style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Women's Sweater
            </h4>
            <p style={{ color: "#888", fontSize: "1rem" }}>$34.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
