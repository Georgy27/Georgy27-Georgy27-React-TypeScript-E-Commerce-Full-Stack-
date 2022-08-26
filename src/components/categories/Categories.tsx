import { categories } from "../../data";
import CategoryItem from "./CategoryItem";
import { Container } from "./Categories.styles";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => {
        return <CategoryItem item={item} key={item.id} />;
      })}
    </Container>
  );
};

export default Categories;
