import {
  Box,
  Button,
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
import InfoPage from "../InfoPage";
import { ArrowBackIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

function ListProducts() {
  const seeCategoryInSendo = (link) => {
    window.open(link);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [key, setKey] = useState({ url: "", product_id: "" });

  const handleOpenModal = (url, product_id) => {
    setKey({ url, product_id });
    onOpen();
  };

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState([]);
  const [totalPage, setTotalPage] = useState(1);

  //call api list products
  useEffect(() => {
    axios
      .get(
        `https://shop-home.sendo.vn/api/v1/product/filter?limit=30&page=${page}&platform=1&seller_admin_id=717078&sortType=vasup_desc`
      )
      .then((res) => {
        setTotalPage(Math.floor(res.data.data.total / 30));
        setProducts(res.data.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  //call api list category
  useEffect(() => {
    axios
      .get(
        "https://api.sendo.vn/onsite-services/shop/collection/external?merchant_external_id=717078"
      )
      .then((res) => {
        setCategory(res.data.data.collections);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Text fontSize="2xl" my={4}>
        Sản phẩm nổi bật
      </Text>

      <Flex>
        {/* show list products */}
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: 4, lg: 8 }}
          w="950px"
        >
          {products?.map((item, index) => {
            return (
              <GridItem
                w="100%"
                display="flex"
                justifyContent="center"
                key={index}
                onClick={() => handleOpenModal(item.url_key, item.product_id)}
              >
                <Product value={item} />
              </GridItem>
            );
          })}
        </Grid>

        {/* category products  */}
        <Box ml={8} flex={1} display={{ base: "none", lg: "block" }}>
          <Text fontSize="xl">Bộ sưu tập</Text>
          {category.map((item) => {
            return (
              <Flex
                my={4}
                key={item.id}
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

      <Flex p={6} w="950px" justifyContent="center">
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page === 1 ? true : false}
        >
          <Icon as={ArrowLeftIcon} />
        </Button>
        <Button isActive={page === 1 ? true : false} onClick={() => setPage(1)}>
          1
        </Button>
        <Button isActive={page === 2 ? true : false} onClick={() => setPage(2)}>
          2
        </Button>
        <Button isActive={page === 3 ? true : false} onClick={() => setPage(3)}>
          3
        </Button>
        <Button isActive={page === 4 ? true : false} onClick={() => setPage(4)}>
          4
        </Button>
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPage ? true : false}
        >
          <Icon as={ArrowRightIcon} />
        </Button>
      </Flex>
      {/* modal detail info product */}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalContent bgColor="#f0f2f5">
          <Flex
            w={{ base: "45px", md: "50px" }}
            h={{ base: "45px", md: "50px" }}
            margin={{ base: 4, md: 8 }}
            color="white"
            bg="linear-gradient(to right, #2c479e, #1edaeb)"
            _hover={{ opacity: "0.8", transform: "scale(1.05)" }}
            borderRadius="50%"
            cursor="pointer"
            position="fixed"
            zIndex="100"
          >
            <Icon
              as={ArrowBackIcon}
              onClick={onClose}
              fontSize="3xl"
              m="auto"
            />
          </Flex>
          <ModalBody>
            <InfoPage urlKey={key.url} productId={key.product_id} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ListProducts;
