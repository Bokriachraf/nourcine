import React from 'react';
import HomeScreen from "./screens/HomeScreen";
import{BrowserRouter, Routes, Route} from "react-router-dom";
import CartScreen from './screens/CartScreen';
import ProductScreen from "./screens/ProductScreen";



function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            amazona
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <BrowserRouter>
        <Routes>
          <Route path="/cart/:id?" element={<CartScreen/>}></Route>
          <Route path="/" element={<HomeScreen/>} exact ></Route>
          <Route path="/product/:id" element={<ProductScreen/>} exact ></Route>
        </Routes>
        </BrowserRouter>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    )
    }
    export default App;