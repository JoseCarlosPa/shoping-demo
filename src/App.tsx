import React, { useState } from "react";
import Nav from "./components/Navbar/Nav";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { HashRouter, Switch, Route } from "react-router-dom";
import './assets/main.css'
import chapp from './assets/chapp-logo.png'


const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<any>([]);
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <HashRouter>
      <Nav cartItems={cartItems} />
      <Switch>
        <Route path="/:id" exact>
          <Shop cartItems={cartItems} setCartItems={setCartItems} />
        </Route>
        <Route path="/cart" exact>
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </Route>
      </Switch>

      <button className="open-button" onClick={handleClick}><img src={chapp} width="30px"
                                                                height="30px"  /></button>


      {show && (
        <div className="chat-popup" id="myForm">
          <form className="form-container">
            <div className="row">
              <div className="col-md-8 text-left">
                <p>Mensajero CHAPP</p>
              </div>
              <div className="col-md-4 text-right">
                <button type="button" className="cancel" onClick={handleClick}>X</button>
              </div>
            </div>

            <iframe
              src="https://chat.gscomp.com.mx/#/auth/contactme?name=Sesicomp&token_service=aTvR3iNIoVdHRwtCt84wCIXlqlhc61WA"
              width="100%" height="550px">
            </iframe>

          </form>
        </div>

      )}

    </HashRouter>
  );
};

export default App;
