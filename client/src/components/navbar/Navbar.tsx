import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import {
  Container,
  Wrapper,
  Left,
  Right,
  Center,
  Language,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
  Header,
} from "./Navbar.styles";

const Navbar = () => {
  return (
    <Header>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search
                style={{
                  color: "gray",
                  fontSize: 16,
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  right: 0,
                  margin: "auto",
                }}
              />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>Georgy.</Logo>
          </Center>
          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
              <Badge overlap="rectangular" badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </Header>
  );
};

export default Navbar;
