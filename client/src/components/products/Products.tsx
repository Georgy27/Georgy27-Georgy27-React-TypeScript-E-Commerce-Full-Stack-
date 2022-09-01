import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./Product";

const ProductContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Products = () => {
  return (
    <Container>
      <ProductContainer>
        {popularProducts.map((item) => {
          return <Product item={item} key={item.id} />;
        })}
      </ProductContainer>
    </Container>
  );
};

export default Products;
