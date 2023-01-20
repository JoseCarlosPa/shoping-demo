import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { BiShoppingBag } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";

const Ul = styled.ul<Condition>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  transition: opacity 0.15s ease, height 0.3s ease, visibility 0.3s ease,
    margin 0.3s ease;

  li {
    text-decoration: none;
    color: white;
    list-style: none;
  }

  li:hover {
    color: #e7daf0;
  }

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    display: block;
    opacity: ${({ open }) => (open ? "1" : "0")};
    height: ${({ open }) => (open ? "120px" : "0")};
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    margin: ${({ open }) => (open ? "2rem 0" : "0")};
    flex-direction: column;
    width: 100%;
    padding: 0;

    li {
      text-align: center;
      padding: 0.5rem;
    }
    li:hover {
      color: white;
      background: #9cb1db;
    }
  }
`;

interface Condition {
  open: boolean;
  cartItems: never[];
}

const Links: React.FC<Condition> = ({ open, cartItems }) => {
  const totalItems = () => {
    return cartItems
      .map((cartItem: any) => cartItem.quantity)
      .reduce((a: number, b: number) => a + b, 0);
  };

  return (
    <Ul open={open} cartItems={cartItems}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <li>
          <TiHomeOutline /> Inicio
        </li>
      </Link>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <li>
          <BiShoppingBag /> Demo
        </li>
      </Link>
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <li>
          <CgShoppingCart />
          Resumen
          {cartItems.length > 0 ? (
            <span
              style={{
                background: "#595cae",
                padding: "4px 8px",
                borderRadius: "50%",
                color: "white",
              }}
            >
              {totalItems()}
            </span>
          ) : null}
        </li>
      </Link>
    </Ul>
  );
};

export default Links;
