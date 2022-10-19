import {
  Box,
  Flex,
  Image,
  Button,
  Center,
  Spacer,
  Tooltip,
  Container,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import logo from "../../assets/truthreview.png";

function Header() {
  const redirectToSendo = () => {
    window.open("https://www.sendo.vn/");
  };
  return (
    <Box bg="white" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 20px 0px">
      <Container maxW="container.xl">
        <Flex py={2} bgColor="white">
          <Image w={{base: '150px', md: '200px'}} src={logo} />
          <Spacer />
          <Center>
            <Tooltip
              hasArrow
              label="Đi đến sendo.vn"
              bg="grey.100"
              color="black"
            >
              <Button
                rightIcon={<ArrowForwardIcon />}
                color="white"
                size={{base: 'sm', md: 'md'}}
                onClick={redirectToSendo}
                bg="linear-gradient(to right, #2c479e, #1edaeb)"
                _hover={{ bg: 'linear-gradient(to right, #2c479e, #1edaeb)' }}
              >
                sendo.vn
              </Button>
            </Tooltip>
          </Center>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
