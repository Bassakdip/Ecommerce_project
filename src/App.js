import React, {useState} from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Store from "./Pages/Store";
import Contact from './Pages/Contact';
import CartProvider from "./Context/CartProvider";
import ProductPage from './Components/product/ProductPage';

function App() {
  const[item,setitem] = useState({});
  function getData (data){
    setitem(data);
    console.log(item);
  }
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="store" element={<Store  getData={getData}/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="productPage" element={<ProductPage product={item}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;