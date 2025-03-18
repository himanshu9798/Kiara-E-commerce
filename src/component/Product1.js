import React, { useState, useEffect } from "react";
import cur1 from "../images/video-image-2.jpg";
import cur2 from "../images/cur2.jpg";
import cur3 from "../images/bg-newsletter.jpg";

function Product() {
  const [img, setImage] = useState(cur1);
  const images = [cur1, cur2, cur3];

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
      <img
        style={{ transform: "none", width: "100%", height: "300px" }}
        src={img}
        alt="Product"
      />
    </div>
  );
}

export default Product;
