import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import styled from "styled-components";
import space from "./images/space.jpeg";
import stars from "./images/stars.jpg";
import mountain from "./images/mountain.jpg";
import moonAndStars from "./images/moon_and_stars.jpg";
import {getAllProducts} from "../../utility/getProducts";

const HeroDiv = styled.div`
  min-height: 50vh;
  background: url(${space}) center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    letter-spacing: 2px;
    font-size: 3rem;
    text-align: center;
    color: white;
    @media (max-width: 420px) {
      font-size: 2rem;
    }
  }

  button {
    font-family: "Poppins", sans-serif;
    outline: none;
    border: none;
    padding: 8px 40px;
    border-radius: 4px;
    background: transparent;
    border: 2px solid #1b7fbd;
    color: white;
    cursor: pointer;
    letter-spacing: 1px;
    transition: 0.3s ease;
    &:hover {
      background: #1b7fbd;
      box-shadow: 0 0 0 4px rgba(27, 127, 189, 0.5);
    }
    @media (max-width: 420px) {
      padding: 4px 20px;
    }
  }
`;

const AboutDiv = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    font-size: 2rem;
    color: #1b7fbd;
    position: relative;
  }

  h2::after {
    content: "";
    position: absolute;
    right: 32%;
    bottom: -10px;
    width: 50px;
    height: 3px;
    background: #595cae;
  }
`;

const AboutP = styled.p`
  text-align: center;
  width: 50%;
  margin: 2rem auto;
  line-height: 1.6;
`;

const GalleryDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 3rem auto;

  img {
    padding: 20px;
  }
`;

const Home = () => {
  const title = document.getElementById("title");
  if (title !== null) {
    title.innerHTML = "DEMO | Inicio";
  }

  return (
    <>
      <HeroDiv>
        <h1>The Trillionaire's Planet Shop</h1>
        <Link to="/shop">
          <button>See Shop</button>
        </Link>
      </HeroDiv>
      <AboutDiv>
        <h2>ABOUT US</h2>
      </AboutDiv>
      <AboutP>
        Thanks to laws passed by the World Congress in 2092, anyone on Earth is
        legally allowed to buy a planet—but for the right price. However, the
        one exception being that no one can buy the Earth.
      </AboutP>
      <GalleryDiv>
        <img src={stars} width="250px" height="200px" alt="stars" />
        <img src={mountain} width="250px" height="200px" alt="mountains" />
        <img src={moonAndStars} width="250px" height="200px" alt="the moon" />
      </GalleryDiv>
      <Footer />
    </>
  );
};

export default Home;
