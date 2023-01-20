import React from "react";
import styled from "styled-components";
import theSun from "../images/sun.jpg";
import theMoon from "../images/moon.jpg";
import mercury from "../images/mercury.png";
import venus from "../images/venus.jpg";
import mars from "../images/mars.jpg";
import jupiter from "../images/jupiter.jpg";
import saturn from "../images/saturn.jpg";
import uranus from "../images/uranus.jpg";
import neptune from "../images/neptune.jpg";
import pluto from "../images/pluto.jpg";
import halleysComet from "../images/halley's_comet.jpg";
import orionsBelt from "../images/orion's_belt.jpg";
import ShopItem from "./shopItem";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

interface CartItems {
  cartItems: never[];
  setCartItems: React.Dispatch<any>;
}

interface PlanetProps {
  name: string;
  src: string;
  price: number;
  id: number;
}

const Items: React.FC<CartItems> = ({ cartItems, setCartItems }) => {
  const planets: Array<PlanetProps> = [
    {
      name: "The moon",
      src: theMoon,
      price: 100,
      id: 1,
    },
    {
      name: "Mercury",
      src: mercury,
      price: 200,
      id: 2,
    },
    {
      name: "Venus",
      src: venus,
      price: 500,
      id: 3,
    },
    {
      name: "Mars",
      src: mars,
      price: 400,
      id: 4,
    },
    {
      name: "Jupiter",
      src: jupiter,
      price: 1100,
      id: 5,
    },
    {
      name: "Saturn",
      src: saturn,
      price: 1000,
      id: 6,
    },
    {
      name: "Uranus",
      src: uranus,
      price: 800,
      id: 7,
    },
    {
      name: "Neptune",
      src: neptune,
      price: 900,
      id: 8,
    },
    {
      name: "Pluto",
      src: pluto,
      price: 450,
      id: 9,
    },
    {
      name: "Sun",
      src: theSun,
      price: 3000,
      id: 10,
    },
    {
      name: "A Comet",
      src: halleysComet,
      price: 50,
      id: 11,
    },
    {
      name: "Orion's Belt",
      src: orionsBelt,
      price: 900,
      id: 12,
    },
  ];

  return (
    <Div>
      {planets.map((planet, i) => (
        <ShopItem
          key={i}
          planet={planet}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </Div>
  );
};

export default Items;
