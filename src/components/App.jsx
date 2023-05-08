import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import ProductPage from "./ProductPage";
import ShoppingCart from "./ShoppingCart";
import { getCart } from "./Firebase";
import "../css/App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const count = 0;
  useEffect(() => {
    getCart().then((data) => {
      setCartItems(data.items);
      setTotalPrice(data.totalPrice);
    });
  }, []);

  return (
    <div>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route
          path="/product"
          element={
            <ProductPage
              onAddToCart={(item) => setCartItems([...cartItems, item])}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              cartItems={cartItems}
              totalPrice={totalPrice}
              setCartItems={setCartItems}
              setTotalPrice={setTotalPrice}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
