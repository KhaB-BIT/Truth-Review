import {
  Box,
  Container,
  Flex,
  Spacer,
  Text,
  chakra,
  Divider,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ImageSlice from "./ImageSlice";
import parse from "html-react-parser";
import Comment from "./Comment";
import "../../styles/InfoPage.scss";
import axios from "axios";

function InfoPage({ urlKey, productId }) {
  const [product, setProduct] = useState();
  urlKey = urlKey.substring(
    "https://www.sendo.vn/".length,
    urlKey.indexOf(".html")
  );

  useEffect(() => {
    axios
      .get(`https://detail-api.sendo.vn/full/${urlKey}?`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container maxW="container.xl">
      <Flex
        bg="white"
        borderRadius="20px"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;"
      >
        <ImageSlice images={product?.data.media} />
        <Box flex={1} p={6} borderRadius="20px">
          <Text fontSize="xl" fontWeight="bold">
            {product?.data.name}
          </Text>
          <Text fontSize="xl" color="red" fontWeight="bold" my={2}>
            {product?.data.final_price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </Text>
          <Text my={2}>
            <chakra.span textDecoration="line-through">
              {product?.data.price_max.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </chakra.span>{" "}
            <chakra.span color="red" ml={1}>
              Giảm{" "}
              {100 -
                Math.floor(
                  (product?.data.final_price * 100) / product?.data.price_max
                )}
              %
            </chakra.span>
          </Text>
          <Flex w="400px" my={4}>
            <Text fontSize="sm">
              ⭐⭐⭐⭐⭐ {product?.data.rating_info.total_rated} đánh giá
            </Text>
            <Spacer />
            <Text fontSize="sm">️🧺 {product?.data.order_count} lượt mua</Text>
          </Flex>
          <Divider my={1} />

          <Text fontSize="md" mb={2} mt={1}>
            Màu sắc
          </Text>
          {product?.data.attribute && (
            <Flex>
              {product?.data.attribute[0]?.value.map((item, index) => {
                return (
                  <Image
                    key={index}
                    boxSize="100px"
                    borderRadius="5px"
                    src={item.image_500x500}
                    mr={2}
                    boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px;"
                  />
                );
              })}
            </Flex>
          )}

          <Text fontSize="md" my={2}>
            Ưu đãi dành cho bạn
          </Text>
          <Flex justifyContent="space-evenly">
            <Text fontSize="sm">🛵 Miễn phí vận chuyển</Text>
            <Text fontSize="sm">💵 Trả góp Kredivo</Text>
          </Flex>

          <Divider my={1} />
          <Text fontSize="md" my={2}>
            Quyền lợi khách hàng
          </Text>
          <Flex justifyContent="space-evenly">
            {product?.data.return_policy.map((item, index) => {
              return (
                <Text fontSize="sm" key={index}>
                  ✅ {item.title}
                </Text>
              );
            })}
          </Flex>
        </Box>
      </Flex>

      <Flex mt={5}>
        <Box
          bg="white"
          w="600px"
          borderRadius="20px"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;"
        >
          <Text pt={6} pl={6} fontSize="xl">
            Chi tiết & hình ảnh sản phẩm
          </Text>
          <Divider my={3} />
          <Box className="detail-product">
            {product ? parse(product?.data.description_info.description) : ""}
          </Box>
        </Box>
        <Comment productId={productId} />
      </Flex>
    </Container>
  );
}

export default InfoPage;
