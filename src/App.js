import React from 'react'
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import AvailableProductItem from './Components/product/AvailableProductItem';
import "bootstrap/dist/css/bootstrap.min.css"
import CartProvider from "./Context/CartProvider";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <Header/>
      <AvailableProductItem/>
      <Footer/>
    </CartProvider>
  );
}

export default App;
