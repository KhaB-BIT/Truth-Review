import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import Notifi from "./Notifi";
import ListProducts from "./ListProducts";
import ScrollToTop from "react-scroll-to-top";

function Homepage() {
  return (
    <Box>
      <Header />
      <Container maxW="container.xl">
        <Notifi />
        <ListProducts />
      </Container>
      <Footer />
      {/* BUTTON SCROLL TO TOP */}
      <ScrollToTop smooth color="#2448c0" />
    </Box>
  );
}

export default Homepage;
