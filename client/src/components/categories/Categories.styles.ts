import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
 max-width: 1400px;
 margin: 0 auto;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", padding: "10px" })}
`;

