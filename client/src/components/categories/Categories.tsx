import { categories } from "../../data";
import CategoryItem from "./CategoryItem";
import { Container, CategoriesContainer } from "./Categories.styles";

const Categories = () => {
  return (
    <Container>
      <CategoriesContainer>
        {categories.map((item) => {
          return <CategoryItem item={item} key={item.id} />;
        })}
      </CategoriesContainer>
    </Container>
  );
};

export default Categories;
