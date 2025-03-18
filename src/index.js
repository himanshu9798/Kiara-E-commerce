import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import Compliment from './component/Compliment';
import Footer from './component/Footer';
import SHOP from './component/SHOP';
import Header from './component/Header';
import Cart from './component/Cart';
import Contact from './component/Contact';


import { BrowserRouter,Router,Routes,Route } from 'react-router-dom';
import Product from './component/Product';
import Order from './component/Order';
import FinalOrder from './component/FinalOrder';
import Payment from './component/Payment';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
<Header></Header>
  <Routes>
    <Route path='/' element={<App/>} ></Route>
    <Route path='/shop' element={<SHOP/>} ></Route>
    <Route path='/cart' element={<Cart/>} ></Route>
    <Route path='/contact' element={<Contact/>} ></Route>
    <Route path='/product' element={<Product/>} ></Route>
    <Route path='/order' element={<Order/>} ></Route>
    <Route path='/finalorder' element={<FinalOrder/>} ></Route>
    <Route path='/payment' element={<Payment/>} ></Route>
  </Routes>
<Footer></Footer>
</BrowserRouter>
 
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

