import styled from "styled-components";
import { mobile, Tablet } from "../../responsive";

// const Container = styled.div`
//   max-width: 1400px;
//   margin: 0 auto;
// `;

const SliderContainer = styled.div`
   width: 100%;
  height: 100vh; 
  display: flex;
  position: relative;
  overflow: hidden;
  ${Tablet({ display: "none" })}
`;

const Arrow = styled.div<{
  direction: "left" | "right";
}>`
  z-index: 2;
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  cursor: pointer;
`;

const Wrapper = styled.div<{ slideIndex: number }>`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div<{
  bg: string;
}>`
 
  height: 100vh; 
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1 1 70%;
`;

const Image = styled.img`
  height: 80%;
  width: 100%;
  object-fit: cover;
  object-position: top;
`;

const InfoContainer = styled.div`
  flex: 1 1 30%;
  padding: 50px;
`;

const Title = styled.h2`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export { SliderContainer, Arrow, Wrapper, ImgContainer, Image, InfoContainer, Title, Description, Button, Slide }