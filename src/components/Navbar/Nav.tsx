import React from "react";
import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1b7fbd;
  min-height: 6vh;
  padding: 0 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;


interface Items {
  cartItems: never[];
}

const Nav: React.FC<Items> = ({ cartItems }) => {
  return (
    <div>
      <Navbar>
        <BurgerMenu cartItems={cartItems} />
      </Navbar>
    </div>
  );
};

export default Nav;
