import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Container,
  Flex,
  Icon,
  Img,
  Spacer,
  Text,
  chakra,
  Divider,
} from "@chakra-ui/react";
import { FaShoppingBag, FaCheckCircle, FaShippingFast } from "react-icons/fa";
import datainfo from "./datainfo";
import ImageSlice from "./ImageSlice";
import parse from "html-react-parser";
import Comment from "./Comment";
import '../../styles/InfoPage.scss';

function InfoPage() {
  return (
    <Container maxW="container.xl">
      <Flex bg="white" borderRadius="20px">
        <ImageSlice images={datainfo.data.media}/>
        <Box flex={1} p={6} borderRadius="20px">
          <Text fontSize="xl" fontWeight="bold">
            {datainfo.data.name}
          </Text>
          <Text fontSize="xl" color="red" fontWeight="bold" my={2}>
            {datainfo.data.final_price}
          </Text>
          <Text my={2}>
            <chakra.span textDecoration="line-through">
              {datainfo.data.price_max}
            </chakra.span>{" "}
            <chakra.span color="red" ml={1}>
              Giảm 48%
            </chakra.span>
          </Text>
          <Flex w="400px" my={4}>
            <Flex>
              <Center>
                <Icon as={StarIcon} mr={1} color="orange" />
                <Icon as={StarIcon} mr={1} color="orange" />
                <Icon as={StarIcon} mr={1} color="orange" />
                <Icon as={StarIcon} mr={1} color="orange" />
                <Icon as={StarIcon} mr={1} color="orange" />
                <Text ml={1} h="18px">
                  {datainfo.data.rating_info.total_rated} đánh giá
                </Text>
              </Center>
            </Flex>
            <Spacer />
            <Flex>
              <Center>
                <Icon as={FaShoppingBag} />
                <Text ml={2} h="18px">
                  {datainfo.data.order_count} lượt mua
                </Text>
              </Center>
            </Flex>
          </Flex>
          <Divider />
          <Text fontSize="lg" mb={2} mt={1}>
            Quyền lợi khách hàng{" "}
          </Text>
          <Flex justifyContent="space-evenly">
            <Flex alignItems="center">
              <Icon color="green" as={FaCheckCircle} mr={2} /> Miễn phí hoàn trả
            </Flex>
            <Flex alignItems="center">
              <Icon color="green" as={FaCheckCircle} mr={2} /> 7 ngày hoàn trả
            </Flex>
            <Flex alignItems="center">
              <Icon color="blue" as={FaShippingFast} mr={2} /> Miễn phí vận
              chuyển
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <Flex>
        <Box bg="white" w="600px" borderRadius="20px" mt={8}>
        <Text pt={6} pl={6} fontSize='xl'>Chi tiết sản phẩm</Text>
        <Divider my={3}/>
          <Box className="detail-product">
            {parse(datainfo.data.description_info.description)}
          </Box>
        </Box>
        <Comment/>
      </Flex>
    </Container>
  );
}

export default InfoPage;
