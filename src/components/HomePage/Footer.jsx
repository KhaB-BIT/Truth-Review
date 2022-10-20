import { Box, Container, Icon, Link, Text } from "@chakra-ui/react";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGlobe,
} from "react-icons/fa";

function Footer() {
  return (
    <Box bg="white" p={{base: 2, md: 5}} mt={4} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'>
      <Container maxW="container.xl">
        <Box textAlign="center">
          <Icon m={2} fontSize="xl" as={FaFacebookSquare} />
          <Icon m={2} fontSize="xl" as={FaYoutubeSquare} />
          <Icon m={2} fontSize="xl" as={FaInstagramSquare} />
          <Icon m={2} fontSize="xl" as={FaGlobe} />
          <Icon m={2} fontSize="xl" as={FaTwitterSquare} />
        </Box>
        <Text textAlign="center" fontSize={{base: 'sm', md: 'md'}}>
          😊 Website được thiết kế phục vụ cho mục đích xem đánh giá sản phẩm và
          mục đích học tập của bản thân tác giả
        </Text>
        <Text textAlign="center" fontSize={{base: 'sm', md: 'md'}}>
          Dữ liệu về các sản phẩm được lấy từ{" "}
          <Link color="#2c479e" href="https://sendo.vn" isExternal>
            sendo.vn
          </Link>
        </Text>
      </Container>
    </Box>
  );
}

export default Footer;
