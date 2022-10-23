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
  //handle open link sendo.vn
  const redirectToSendo = () => {
    window.open("https://www.sendo.vn/");
  };

  //handle reload page when click into logo
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <Box bg="white" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 20px 0px">
      <Container maxW="container.xl">
        <Flex py={2} bgColor="white">
          <Image
            w={{ base: "150px", md: "200px" }}
            src={logo}
            onClick={reloadPage}
            cursor="pointer"
          />
          <Spacer />
          <Center>
            <Tooltip
              label="Đi đến sendo.vn"
              bg="linear-gradient(to right, #2c479e, #1edaeb)"
              color="white"
            >
              <Button
                rightIcon={<ArrowForwardIcon />}
                color="white"
                size={{ base: "sm", md: "md" }}
                onClick={redirectToSendo}
                bg="linear-gradient(to right, #2c479e, #1edaeb)"
                _hover={{ bg: "linear-gradient(to right, #2c479e, #1edaeb)" }}
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
