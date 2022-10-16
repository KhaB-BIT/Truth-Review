import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Spacer,
  Tooltip,
} from "@chakra-ui/react";
// remember to move in to public
import logo from "../../image/truthreview.png";

function Header() {
  const redirectToSendo = () => {
    window.open("https://www.sendo.vn/");
  };
  return (
    <Box bg="white" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
      <Container maxW="container.xl">
        <Flex py={2} bgColor="white">
          <Image w="200px" src={logo} />
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
                size="md"
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
