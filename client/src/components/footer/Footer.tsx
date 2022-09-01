import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Telegram,
  Twitter,
} from "@material-ui/icons";
import {
  Container,
  Left,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
  Center,
  Title,
  List,
  ListItem,
  Right,
  ContactItem,
  Payment,
  Wrapper,
} from "./Footer.styles";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Georgy.</Logo>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae quas error facere ducimus ad, eos iusto provident
            quibusdam! Dicta nostrum, quaerat reprehenderit cumque earum
            consequuntur quod perferendis quidem in accusamus nemo est quo
            aliquid quas laborum aliquam illum maxime! Voluptate!
          </Description>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Telegram />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} />4 Privet Drive, Little
            Whinging
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} />
            413-497-0167
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} />
            hogwarts@magic.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
