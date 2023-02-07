import React from "react";
import Spline from '@splinetool/react-spline';
import s from "./Spline.module.css"
import styled from "styled-components"

import Logo from "../images/logo.svg"
import IconTwitter from "../images/twitter.svg"
import IconYouTube from "../images/youtube.svg"
import IconLaptop from "../images/laptop-new.svg"

export default function SplineComponent() {
    return (
        <Wrapper>
            <Spline className="spline" scene="https://prod.spline.design/b1EqHozIdRZXPWZV/scene.splinecode" />
            <Content>
                <Menu>
                    <li><img src={Logo} alt="Logo"/></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Download</a></li>
                    <li><a href="/">App</a></li>
                    <li><a href="/">Login</a></li>
                    <li><button>Get Started</button></li>
                </Menu>
                <h1>Collaborate with people</h1>
                <p>
                    Our company creates very high quality kitchen furniture for you.
                    Thanks to the professional work of specialists, including 8 design engineers of the 1st category,
                    the completed orders clearly correspond to the technical specifications of the client.
                    The 3D model is provided along with the developed design documentation (CD).
                </p>
                <button>
                    <img src={IconLaptop} alt="Download"/> Download for Mac
                </button>
            </Content>
            <Social>
                <div />
                <img src={IconTwitter} alt="Twitter"/>
                <img src={IconYouTube} alt="YouTube"/>
            </Social>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  font-family: 'Spline Sans', sans-serif;
  font-size: 16px;
  color: black;
  position: relative;
  
  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
    
    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 40px;
  }
  
  h1 {
    font-family: 'Spline Sans Mono', monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }
  
  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }
  
  img {
    width: 24px;
    height: 24px;
  }
  
  button {
    background: rgba(255, 255, 255, 0.2);
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: black;
    max-width: 280px;
    backdrop-filter: blur(20px);
    
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    
    transition: 1s;
    
    :hover {
      border: 1px solid rfba(0, 0, 0, 0.4);
      transform: translate(-3px);
     // backdrop-filter: blur(40px);
      background: rgba(255, 255, 255, 0.5) ;
    }
  }
  
  h1, 
  p, 
  button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;// ширина ячеек
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;

  @media (max-width: 1024px) {
    margin: 0 30px;
  }
  
  li {
    list-style: none; //чтобы не было точек перед <li/>
    margin: 0;


    a {
      text-decoration: none;
      color: black;
      padding: 8px 20px;
      border: 1px solid rgba(0, 0, 0, 0.8);
      transition: 1s;
      border-radius: 14px;

      :hover {
        border: 1px solid rgba(0, 0, 0, 0.2);
      }
    }
  }

  @media (max-width: 800px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
`;

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  
  img {
    width: 24px;
    height: 24px;
  }
  
  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%, 
      #6c56ef 33.57%,
      #1306dd 65.86%,
      #aa0eb2 100%
    );
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

