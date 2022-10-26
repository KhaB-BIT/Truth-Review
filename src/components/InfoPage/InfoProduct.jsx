import { Box, Divider, Flex, Image, Text, chakra } from "@chakra-ui/react";

function InfoProduct({ product }) {
  return (
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
      <Flex justifyContent="space-around" my={4}>
        <Text fontSize="sm">
          ⭐⭐⭐⭐⭐ {product?.data.rating_info.total_rated} đánh giá
        </Text>
        <Text fontSize="sm">️🧺 {product?.data.order_count} lượt mua</Text>
      </Flex>
      <Divider my={1} />

      <Text fontSize="md" mb={2} mt={1}>
        {" "}
        Màu sắc
      </Text>
      {product?.data.attribute && (
        <Flex>
          {product?.data.attribute[0]?.value.map((item, index) => {
            return (
              <Image
                key={index}
                mr={2}
                boxSize="100px"
                borderRadius="5px"
                boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px;"
                src={item.image_500x500}
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
  );
}

export default InfoProduct;
