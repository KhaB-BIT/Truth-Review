import { Container } from "@chakra-ui/react";
import Header from "./Header";
import ListProducts from "./ListProducts";

function Homepage() {
  return <Container maxW="container.xl">
    <Header />
    <ListProducts/>
  </Container>;
}

export default Homepage;
