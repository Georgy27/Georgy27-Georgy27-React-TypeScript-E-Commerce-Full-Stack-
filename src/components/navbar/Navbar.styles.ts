import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
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
  width:200px;
  height: 40px;
  position:relative;
  ${mobile({ width: "100px" })}
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
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


export { Container, Wrapper, Left, Right, Center, Language, SearchContainer, Input, Logo, MenuItem }