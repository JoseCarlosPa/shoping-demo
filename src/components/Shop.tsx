import React, {useEffect} from "react";
import Items from "../data/Items";
import styled from "styled-components";
import { BiShoppingBag } from "react-icons/bi";
import {clientExample} from "../utility/fakeData";
import {getAllProducts} from "../utility/getProducts";
import {useParams} from "react-router-dom";

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

  const [cartCount, setCartCount] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const {id} = useParams<{id:string}>()


  const title = document.getElementById("title");
  if (title !== null) {
    title.innerHTML = "DEMO | Productos";
  }
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        await getAllProducts('d93488d2-bf4c-11ec-981d-005056ac3ab7',id);
      } catch (e) {
        console.log(e);
      }
    }
    getProducts();
  },[id])



  useEffect(()=>{
    try{
      let sum = cartItems.reduce((acc, item:any) => acc + item.quantity, 0);
      setCartCount(sum);

      // get the sum of the total
      let totalSum = cartItems.reduce((acc, item:any) => acc + item.quantity * item.price, 0);
      setTotal(totalSum);


    }catch (e) {
      console.log(e);
    }
  },[cartItems])

  return (
    <>
      <Div>
        <h1 >
          <BiShoppingBag /> {clientExample.dato.nombre}
        </h1>
        <hr />
        <div className="row">
          <div className="col-6">
            <h3 className="text-center">Items: {cartCount}</h3>
          </div>
          <div className="col-6">
            <h3 className="text-center">Total: $ {total}</h3>
          </div>
        </div>
        <Items cartItems={cartItems} setCartItems={setCartItems} />
      </Div>
    </>
  );
};

export default Shop;
