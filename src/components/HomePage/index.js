import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import ListProducts from "./ListProducts";
import ScrollToTop from "react-scroll-to-top";

function Homepage() {
  return (
    <Box>
      <Header />
      <Container maxW="container.xl">
        <ListProducts />
      </Container>
      <Footer/>
      <ScrollToTop smooth color="#2448c0" />
    </Box>
  );
}

export default Homepage;
