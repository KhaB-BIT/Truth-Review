import { StarIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Icon, Img, Spacer, Text } from "@chakra-ui/react";
import { FaShoppingBag } from "react-icons/fa";
import "../../styles/Product.scss";

function Product({ value }) {
  return (
    <Box
      className="product-item"
      bg="white"
      borderRadius="10px"
      cursor="pointer"
    >
      <Img
        w="100%"
        h="310px"
        objectFit="cover"
        borderRadius="10px"
        src={value.image}
      />

      <Box p={3}>
        <Text
          fontSize="md"
          fontWeight="bold"
          my={3}
          className="product-item--name"
        >
          {value.name}
        </Text>
        <Text fontSize="md" fontWeight="bold">
          {value.price} VND
        </Text>
        <Flex>
          <Flex>
            <Center>
              <Icon as={StarIcon} mr={1} color="orange" />
              <Icon as={StarIcon} mr={1} color="orange" />
              <Icon as={StarIcon} mr={1} color="orange" />
              <Icon as={StarIcon} mr={1} color="orange" />
              <Icon as={StarIcon} mr={1} color="orange" />
              <Text ml={1} h="18px">
                {value.total_rated}
              </Text>
            </Center>
          </Flex>
          <Spacer />
          <Flex>
            <Center>
              <Icon as={FaShoppingBag} />
              <Text ml={2} h="18px">
                {value.order_count}
              </Text>
            </Center>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Product;
