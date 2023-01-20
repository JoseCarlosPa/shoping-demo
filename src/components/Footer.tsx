import React from "react";
import styled from "styled-components";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Div = styled.div`
  text-align: center;
  background: #595cae;
  bottom: 0;
  color: white;

  h3 {
    font-size: 1.8rem;
    padding-top: 2rem;
  }

  div {
    display: flex;
    justify-content: center;
    p {
      padding: 0 1rem;
      font-size: 1.3rem;
      transition: 0.3s ease;
      cursor: pointer;
      &:hover {
        transform: translateY(-1rem);
      }
    }
  }
`;

const Footer = () => {
  return (
    <Div>
      <h3>Contact us</h3>
      <div>
        <p>
          <AiOutlineTwitter />
        </p>
        <p>
          <FaFacebook />
        </p>
        <p>
          <FiYoutube />
        </p>
        <p>
          <GrInstagram />
        </p>
      </div>
    </Div>
  );
};

export default Footer;
