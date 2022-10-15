import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Center, Flex, Image, Spacer, Tooltip } from "@chakra-ui/react";
// remember to move in to public
import logo from "../../image/truthreview.png";

function Header() {
  const redirectToSendo = () => {
    window.open("https://www.sendo.vn/");
  };
  return (
    <Flex p={2} background="#fff">
      <Image w="200px" src={logo} />
      <Spacer />
      <Center>
        <Tooltip hasArrow label="Đi đến sendo.vn" bg='grey.100' color='black'>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="red"
            size="md"
            onClick={redirectToSendo}
          >
            sendo.vn
          </Button>
        </Tooltip>
      </Center>
    </Flex>
  );
}

export default Header;
