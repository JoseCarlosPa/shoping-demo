import React, {useEffect} from "react";
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

const ShopItem: React.FC<ItemKeys> = ({planet, cartItems, setCartItems}) => {
  const [counter, setCounter] = React.useState(0);

  useEffect(() => {
    // get the item from the cart
    let itemExists = cartItems.find((cartItem) => cartItem.id === planet.id);
    if (itemExists) {
      setCounter(itemExists.quantity);
    }
  }, [cartItems, planet.id])

  const addToCart = (item: any) => {
    setCounter(prev => prev + 1);
    let itemExists = cartItems.find((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? {...itemExists, quantity: itemExists.quantity + 1}
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, {...item, quantity: 1}]);
    }
  };

  const minusToCart = (item: any) => {
    if (counter >= 1) {
      setCounter(prev => prev - 1);
      let itemExists = cartItems.find((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? {...itemExists, quantity: itemExists.quantity - 1}
              : cartItem
          )
        );
      } else {
        setCartItems([...cartItems, {...item, quantity: 1}]);
      }
    }

  };


  return (
    <ItemDiv>
      <h2>
        {planet.name}, ${planet.price}
      </h2>
      <div className="text-center">
        <p className="fs-3">{counter}</p>
        <img src={planet.src} alt={planet.name} height="200px" width="200px"/>
      </div>
      <button onClick={() => minusToCart(planet)} style={{fontWeight: "bold"}}>
        - Quitar
      </button>
      <button onClick={() => addToCart(planet)} style={{fontWeight: "bold"}}>
        + Agregar
      </button>
</ItemDiv>
)
  ;
};

export default ShopItem;
