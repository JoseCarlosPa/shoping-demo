import React from "react";
import Items from "../data/Items";
import styled from "styled-components";
import { BiShoppingBag } from "react-icons/bi";

const Div = styled.div`
  width: 60%;
  margin: 3rem auto;

  h1 {
    margin-top: 3rem;
    text-align: center;
  }

  p {
    text-align: center;
  }
`;

interface CartItems {
  cartItems: never[];
  setCartItems: React.Dispatch<any>;
}

const Shop: React.FC<CartItems> = ({ cartItems, setCartItems }) => {
  const title = document.getElementById("title");
  if (title !== null) {
    title.innerHTML = "DEMO | Productos";
  }

  return (
    <>
      <Div>
        <h1 >
          <BiShoppingBag /> DEMO
        </h1>
        <Items cartItems={cartItems} setCartItems={setCartItems} />
      </Div>
    </>
  );
};

export default Shop;
