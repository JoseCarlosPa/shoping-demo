import React, { useState } from "react";
import styled from "styled-components";
import Links from "./Links";

const HamburgerMenu = styled.div<{ open: boolean }>`
  display: none;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    margin: 4px;
    background: white;
    transition: all 0.3s ease;
    &:nth-child(1) {
      transform: ${({ open }) =>
        open ? "rotate(-45deg) translate(-5px, 5px)" : "rotate(0)"};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ open }) =>
        open ? "rotate(45deg) translate(-5px, -5px)" : "rotate(0)"};
    }
  }

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 3%;
    right: 6%;
  }
`;

interface Items {
  cartItems: never[];
}

const BurgerMenu: React.FC<Items> = ({ cartItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HamburgerMenu open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerMenu>
      <Links open={open} cartItems={cartItems} />
    </>
  );
};

export default BurgerMenu;
