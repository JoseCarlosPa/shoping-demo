import React, { useState } from "react";
import ErrorModal from "./Modals/ErrorModal";
import PurchaseModal from "./Modals/PurchaseModal";
import styled from "styled-components";
import { CgShoppingCart } from "react-icons/cg";

const Div = styled.div`
  width: 60%;
  margin: 0 auto;
  @media (max-width: 510px) {
    width: 80%;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem auto;
    border-bottom: 3px solid #1b7fbd;
    width: 90%;
    @media (max-width: 510px) {
      h1 {
        font-size: 1.5rem;
      }
      h3 {
        font-size: 0.8rem;
      }
    }
  }
`;

const ItemDiv = styled.div`
  display: flex;
  margin: 2rem;
  border: 2px solid #595cae;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.1);
  padding: 1rem 2rem;
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;

    img {
      margin: 0 auto;
    }
  }

  img {
    @media (max-width: 650px) {
      width: 125px;
      height: 125px;
    }
  }

  h3 {
    color: black;
    margin: 0.5rem 0;
    text-align: center;
  }
  @media (min-width: 710px) {
    padding: 1rem;
  }
`;

const ItemText = styled.div`
  margin: 0 1rem;

  @media (max-width: 710px) {
    font-size: 0.8rem;
  }
`;

const ItemButtons = styled.button`
  font-family: "Poppins", sans-serif;
  outline: none;
  border: none;
  padding: 4px 16px;
  margin: 0.5rem 1rem;
  border-radius: 4px;
  background: transparent;
  border: 2px solid #595cae;
  cursor: pointer;
  letter-spacing: 1px;
  transition: 0.3s ease;
  color: black;
  white-space: nowrap;
  &:hover {
    background: #595cae;
    color: white;
  }
  @media (max-width: 700px) {
    font-size: 0.8rem;
    display: flex;
  }
`;

const PurchaseButton = styled.button`
  font-family: "Poppins", sans-serif;
  outline: none;
  border: none;
  padding: 8px 40px;
  border-radius: 4px;
  background: transparent;
  border: 2px solid #595cae;
  cursor: pointer;
  letter-spacing: 1px;
  transition: 0.3s ease;
  margin-bottom: 5rem;
  &:hover {
    box-shadow: 0 0 0 4px rgba(89, 92, 174, 0.5);
    background: #595cae;
    color: white;
  }
`;

interface Items {
  cartItems: any[];
  setCartItems: React.Dispatch<any>;
}

const Cart: React.FC<Items> = ({ cartItems, setCartItems }) => {
  const [empty, setEmpty] = useState(false);
  const [purchased, setPurchased] = useState(false);

  const title = document.getElementById("title");
  if (title !== null) {
    title.innerHTML = "DEMO | Carrito";
  }

  const handlePurchase = () => {
    if (!cartItems.length) {
      setEmpty(true);
    } else {
      setPurchased(true);
      setCartItems([]);
    }
  };

  const totalPrice = () => {
    return cartItems
      .map((cartItem: any) => cartItem.price * cartItem.quantity)
      .reduce((a: number, b: number) => a + b, 0);
  };

  const totalItems = () => {
    return cartItems
      .map((cartItem: any) => cartItem.quantity)
      .reduce((a: number, b: number) => a + b, 0);
  };

  const removeItem = (item: any) => {
    let itemToRemove = cartItems.find((cartItem) => cartItem.id === item.id);

    if (itemToRemove.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...itemToRemove, quantity: itemToRemove.quantity - 1 }
            : cartItem
        )
      );
    }
  };

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
    <>
      <Div>
        <div className="header">
          <h1>
            <CgShoppingCart /> Pedido
          </h1>
          <h3>{totalItems()} Items</h3>
        </div>
        {cartItems.map((item, i) => {
          return (
            <div key={i}>
              <ItemDiv>
                <img
                  src={item.src}
                  alt={item.name}
                  height="200px"
                  width="200px"
                />
                <ItemText>
                  <h3>
                    {item.name}, Price: ${item.price}
                  </h3>
                  <h3>Quantity: {item.quantity}</h3>
                  <ItemButtons onClick={() => removeItem(item)}>
                    - Quitar
                  </ItemButtons>
                  <ItemButtons onClick={() => addToCart(item)}>
                    + Agregar
                  </ItemButtons>
                </ItemText>
              </ItemDiv>
            </div>
          );
        })}
        <p style={{ textAlign: "center" }}>Total: ${totalPrice()}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PurchaseButton onClick={handlePurchase}>Hacer pedido</PurchaseButton>
        </div>
      </Div>

      {empty ? <ErrorModal setEmpty={setEmpty} /> : null}
      {purchased ? <PurchaseModal setPurchased={setPurchased} /> : null}
    </>
  );
};

export default Cart;
