import React, {useEffect} from "react";
import styled from "styled-components";
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
import noimage from "../images/noimage.jpg";
import ShopItem from "./shopItem";
import {clientExample} from "../utility/fakeData";


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
  clave?: string;
}

const Items: React.FC<CartItems> = ({ cartItems, setCartItems }) => {

  const [items, setItems] = React.useState<PlanetProps[]>([]);
  const products = clientExample.dato.precios_cliente;

  useEffect(()=>{
    setItems([]);
    // Add to the array of items products
    products.forEach((product: any) => {
      const item = {
        name: product.nombre ? product.nombre : "N/A",
        src: product.imagen ? product.imagen : noimage,
        price: product.precio,
        id: product.id,
        clave: product.clave,
      }
      setItems((prevState) => [...prevState, item]);
    })
  },[clientExample])



  return (
    <Div>
      {items.map((planet, i) => (
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
