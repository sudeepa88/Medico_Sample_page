import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Cart from "./pages/Cart";
import icon from "./assets/medico-logos.jpeg";
import "./root.css";

function App() {
  const [cart, SetCart] = useState([]);
  console.log("mycart", cart);
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className="navigation">
            <img src={icon} alt="medico" className="icon" />
            <li className="margin-8">
              <Link to="/">Home</Link>
            </li>
            <li className="margin-8">
              <Link to="/Cart" className="cartButton">
                {cart.length > 0 ? (
                  <>
                    {"Cart"}
                    <div className="Cartvalue"> {cart.length}</div>
                  </>
                ) : (
                  "Cart"
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/Cart">
          <Cart  cart={cart} SetCart={SetCart}/>
        </Route>
        <Route path="/">
          <Home SetCart={SetCart} cart={cart} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
// <Link to="/">Covid Tracker</Link>
export default App;
