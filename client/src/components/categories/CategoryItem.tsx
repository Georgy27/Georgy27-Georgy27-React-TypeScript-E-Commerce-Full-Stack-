import { Container, Image, Info, Title, Button } from "./CategoryItem.styles";

interface CategoryItemProps {
  item: {
    id: number;
    img: string;
    title: string;
  };
}
const CategoryItem = ({ item }: CategoryItemProps) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
