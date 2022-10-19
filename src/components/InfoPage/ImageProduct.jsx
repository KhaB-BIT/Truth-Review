import parse from "html-react-parser";
import { Box, Divider, Text } from "@chakra-ui/react";

function ImageProduct({ product }) {
  return (
    <Box
      w={{base: '100%', lg: '600px'}}
      bg="white"
      borderRadius="20px"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;"
    >
      <Text pt={6} pl={6} fontSize="xl">
        Chi tiết & hình ảnh sản phẩm
      </Text>
      <Divider my={3} />
      <Box className="detail-product" maxH={{base: '60vh', lg: '100vh'}} mb={4}>
        {product ? parse(product?.data.description_info.description) : ""}
      </Box>
    </Box>
  );
}

export default ImageProduct;
