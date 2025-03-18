
import { useLocation } from 'react-router-dom';
import Cart from './Cart';
import React, { useState, useEffect } from 'react';

const Whilist = () => {
  const location = useLocation();
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    if (location.state?.cartData) {
      setCartData((prevCart) => [...prevCart, ...location.state.cartData]);
    }
  }, [location.state?.cartData]);
  return (
    <div>
      <Cart cartItems={cartData} />
    </div>
  );
};

export default Whilist;
