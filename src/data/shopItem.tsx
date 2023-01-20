import React from "react";
import styled from "styled-components";

const ItemDiv = styled.div`
  padding: 20px;
  margin: 0 auto;

  h2 {
    margin: 0.5rem 0;
    text-align: center;
  }

  div {
    width: 100%;
    margin: 0 auto;
  }

  button {
    font-family: "Poppins", sans-serif;
    outline: none;
    border: none;
    padding: 8px 32px;
    border-radius: 25px;
    background: transparent;
    border: 2px solid #1b7fbd;
    cursor: pointer;
    letter-spacing: 1px;
    transition: 0.3s ease;
    width: 100%;
    &:hover {
      background: #1b7fbd;
      color: white;
    }
  }
`;

interface ItemKeys {
  planet: any;
  cartItems: any[];
  setCartItems: React.Dispatch<any>;
}

const ShopItem: React.FC<ItemKeys> = ({ planet, cartItems, setCartItems }) => {
  const addToCart = (item: any) => {
    let itemExists = cartItems.find((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...itemExists, quantity: itemExists.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <ItemDiv>
      <h2>
        {planet.name}, ${planet.price}
      </h2>
      <div>
        <img src={planet.src} alt={planet.name} height="200px" width="200px" />
      </div>
      <button onClick={() => addToCart(planet)} style={{ fontWeight: "bold" }}>
        + Agregar
      </button>
    </ItemDiv>
  );
};

export default ShopItem;
