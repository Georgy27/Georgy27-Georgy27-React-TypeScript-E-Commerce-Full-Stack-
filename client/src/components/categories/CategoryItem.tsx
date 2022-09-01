import {
  Image,
  Info,
  Title,
  Button,
  ItemContainer,
  ImageContainer,
} from "./CategoryItem.styles";

interface CategoryItemProps {
  item: {
    id: number;
    img: string;
    title: string;
  };
}
const CategoryItem = ({ item }: CategoryItemProps) => {
  return (
    <ItemContainer>
      <ImageContainer>
        <Image src={item.img} />
      </ImageContainer>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </ItemContainer>
  );
};

export default CategoryItem;
