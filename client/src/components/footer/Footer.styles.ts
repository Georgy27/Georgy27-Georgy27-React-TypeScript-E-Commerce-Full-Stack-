import styled from "styled-components";
import { mobile, Tablet } from "../../responsive";

const Container = styled.div`
 max-width: 1400px;
 margin: 0 auto;
`;
const Wrapper = styled.footer`
  display: flex;
  ${mobile({ flexDirection: "column" })}
  ${Tablet({ flexWrap: "wrap" })}
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
  /* ${Tablet({ padding: "5px" })} */
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${Tablet({ flex: "0 1 280px" })}
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "lightgray" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;

  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

export { Container, Left, Logo, Description, SocialContainer, SocialIcon, Center, Title, List, ListItem, Right, ContactItem, Payment, Wrapper }