import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Img,
  Tab,
  TabList,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Modal, ModalContent, ModalBody } from "@chakra-ui/react";
import Product from "./Product";
import InfoPage from "../InfoPage";
import { ArrowBackIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import CategorySkeleton from "./CategorySkeleton";
import ListProductsSkeleton from "./ListProductsSkeleton";

function ListProducts() {
  //handle open category link in orther tab
  const seeCategoryInSendo = (link) => {
    window.open(link);
  };

  //set up and handle open/close modal info detail
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpenModal = (url, product_id) => {
    setKey({ url, product_id });
    onOpen();
  };

  const [key, setKey] = useState({ url: "", product_id: "" });
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [tabIndex, setTabIndex] = useState(0);

  //set empty for products when 'page' change
  useEffect(()=>{
    setProducts([])
  }, [page])

  //set first page and empty forproducts when 'tabIndex' change
  useEffect(() => {
    setPage(1)
    setProducts([])
  }, [tabIndex])

  
  //call api and set list products whenever 'page' or 'tabIndex' change
  useEffect(() => {
    let endpoint = `/product/filter?limit=30&page=${page}&platform=1&seller_admin_id=717078&`;
    switch (tabIndex) {
      case 1: endpoint += `sortType=norder_30_desc`; break;
      case 2: endpoint += `sortType=product_desc`; break;
      case 3: endpoint += `sortType=price_asc`; break;
      case 4: endpoint += `sortType=price_desc`; break;
      default: endpoint += `sortType=vasup_desc`; break;
    }
    axios
      .get(endpoint)
      .then((res) => {
        setTotalPage(Math.ceil(res.data.data.total / 30));
        setProducts(res.data.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, tabIndex]);

  //effect scroll top when change page
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [page]);

  //call api and set list category
  useEffect(() => {
    axios
      .get(
        "/onsite-services/shop/collection/external?merchant_external_id=717078"
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
      <Tabs
        onChange={(index) => setTabIndex(index)}
        variant="soft-rounded"
        colorScheme="blue"
        my={3}
      >
        <TabList flexWrap='wrap' justifyContent={{base: 'center', lg: 'unset'}}>
          <Tab>Tất cả</Tab>
          <Tab>Bán chạy</Tab>
          <Tab>Mới nhất</Tab>
          <Tab>Giá tăng dần</Tab>
          <Tab>Giá giảm dần</Tab>
        </TabList>
      </Tabs>

      <Flex>
        {/* show list products */}
        {products.length === 0 ? (
          // show skeleton when products not ready
          <ListProductsSkeleton />
        ) : (
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={{ base: 4, lg: 8 }}
            w="950px"
          >
            {/* render list products */}
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
        )}

        {/* category products  */}
        <Box ml={8} flex={1} display={{ base: "none", lg: "block" }}>
          <Text fontSize="xl">Bộ sưu tập</Text>
          {/* render list category */}
          {category.length === 0 ? (
            <CategorySkeleton />
          ) : (
            <>
              {category.map((item) => {
                return (
                  <Flex
                    my={4}
                    cursor="pointer"
                    onClick={() => seeCategoryInSendo(item.listing_link)}
                    key={item.id}
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
            </>
          )}
        </Box>
      </Flex>

      {/* pagination */}
      <Flex p={6} w={{ base: "100%", lg: "950px" }} justifyContent="center">
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page === 1 ? true : false}
        >
          <Icon as={ArrowLeftIcon} />
        </Button>
        {[...Array(totalPage)].map((e, index) => (
          <Button
            key={index}
            isActive={page === index + 1 ? true : false}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
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
              fontSize="3xl"
              m="auto"
              as={ArrowBackIcon}
              onClick={onClose}
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
