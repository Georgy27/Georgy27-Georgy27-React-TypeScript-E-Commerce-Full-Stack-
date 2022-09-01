import styled from "styled-components";
import { mobile, Tablet } from "../../responsive";

const Header = styled.header`
  height: 60px;
  ${mobile({ height: "50px" })}
`
const Container = styled.div`
 max-width: 1400px;
 margin: 0 auto;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border:  1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  max-width:200px;
  min-width: 150px;
  height: 40px;
  position:relative;
  ${mobile({ width: "100px", height: "35px" })}
`;

const Input = styled.input`
  border: none;
  padding-left: 5px;
  height: 95%;
  width:100%;
 padding-right:20px;

`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${Tablet({ display: "none" })}
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "space-evenly" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


export { Container, Wrapper, Left, Right, Center, Language, SearchContainer, Input, Logo, MenuItem, Header }