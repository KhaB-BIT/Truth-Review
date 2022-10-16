import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  Img,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Modal, ModalContent, ModalBody } from "@chakra-ui/react";
import Product from "./Product";
import data, { category } from "./data";
import InfoPage from "../InfoPage";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useState } from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";

function ListProducts() {
  const seeCategoryInSendo = (link) => {
    window.open(link);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [url, setUrl] = useState()

  const handleOpenModal = (value) => {
    setUrl(value)
    onOpen()
  }

  //https://shop-home.sendo.vn/api/v1/product/filter?limit=30&page=1&platform=1&seller_admin_id=717078&sortType=vasup_desc
  // const [products, setProducts] = useState();
  // useEffect(() => {
  //   axios
  //     .get(
  //       "/product/filter?limit=30&page=1&platform=1&seller_admin_id=717078&sortType=vasup_desc"
  //     )
  //     .then((res) => {
  //       const data = res.data;
  //       setProducts(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <>
      <Text fontSize="3xl" my={4}>
        Sản phẩm nổi bật
      </Text>

      <Flex>
        <Grid templateColumns="repeat(3, 1fr)" gap={8} w="950px">
          {data?.data.list.map((item, index) => {
            return (
              <GridItem w="100%" key={index} onClick={() => handleOpenModal(item.url_key)}>
                <Product value={item} />
              </GridItem>
            );
          })}
        </Grid>

        <Box ml={8} flex={1}>
          <Text>Trending topics</Text>
          {category.data.collections.map((item) => {
            return (
              <Flex
                key={item.id}
                my={4}
                onClick={() => seeCategoryInSendo(item.listing_link)}
                cursor="pointer"
              >
                <Img
                  w="100px"
                  h="60px"
                  objectFit="cover"
                  borderRadius="5px"
                  src={item.image_url}
                />
                <Box ml={3} flex={1}>
                  <Text>{item.name}</Text>
                  <Text fontSize="xs">{item.product_total} sản phẩm</Text>
                </Box>
              </Flex>
            );
          })}
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalContent bgColor="#f0f2f5">
          <Flex
            w="50px"
            h="50px"
            margin={8}
            color='white'
            bg="linear-gradient(to right, #2c479e, #1edaeb)"
            _hover={{ opacity: '0.8' }}
            borderRadius="50%"
            cursor="pointer"
            position='fixed'
          >
            <Icon
              as={ArrowBackIcon}
              onClick={onClose}
              fontSize="3xl"
              m="auto"
            />
          </Flex>
          <ModalBody>
            <InfoPage urlKey={url} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ListProducts;
