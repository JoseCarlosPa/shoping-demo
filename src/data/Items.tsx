import React from "react";
import styled from "styled-components";
import theSun from "../images/sun.jpg";
import theMoon from "../images/moon.jpg";
import mercury from "../images/mercury.png";
import lechuga from "../images/lechuga.jpg";
import pepino from "../images/pepino.jpg";
import jitomate from "../images/jitomate.jpg";
import huevo from "../images/huevo.jpg";
import chile from "../images/chile.jpg";
import champiñon from "../images/champiñones.jpg";
import cebolla from "../images/cebolla.jpg";
import leche from "../images/leche.jpg";
import pan from "../images/pan_de_caja.jpg";
import hielo from "../images/hielo.jpg";
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
      name: "Bolsa de hielo grande",
      src: hielo,
      price: 100,
      id: 1,
    },
    {
      name: "Bolsa de hielo mediana",
      src: hielo,
      price: 50,
      id: 2,
    },
    {
      name: "Bolsa de hielo chica",
      src: hielo,
      price: 30,
      id: 3,
    },
    {
      name: "huevo",
      src: huevo,
      price: 400,
      id: 4,
    },
    {
      name: "Chile",
      src: chile,
      price: 1100,
      id: 5,
    },
    {
      name: "Cebolla",
      src: cebolla,
      price: 1000,
      id: 6,
    },
    {
      name: "Jitomate",
      src: jitomate,
      price: 800,
      id: 7,
    },
    {
      name: "Pepino",
      src: pepino,
      price: 900,
      id: 8,
    },
    {
      name: "Lechuga",
      src: lechuga,
      price: 450,
      id: 9,
    },
    {
      name: "Champiñones",
      src: champiñon,
      price: 3000,
      id: 10,
    },
    {
      name: "Leche",
      src: leche,
      price: 50,
      id: 11,
    },
    {
      name: "Pan de caja",
      src: pan,
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
