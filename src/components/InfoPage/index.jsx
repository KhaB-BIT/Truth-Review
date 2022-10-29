import axios from "axios";
import Comment from "./Comment";
import "../../styles/InfoPage.scss";
import ImageSlice from "./ImageSlice";
import InfoProduct from "./InfoProduct";
import ImageProduct from "./ImageProduct";
import { useEffect, useState } from "react";
import { Flex, Container, Skeleton, Stack } from "@chakra-ui/react";
function InfoPage({ urlKey, productId }) {
  const [product, setProduct] = useState();
  //handle new key from prop urlKey
  urlKey = urlKey.substring(
    "https://www.sendo.vn/".length,
    urlKey.indexOf(".html")
  );
  //call api get full info product                                          
  useEffect(() => {
    axios
      .get(`/full/${urlKey}?`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [urlKey]);

  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        bg="white"
        borderRadius="20px"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;"
        flexDirection={{ base: "column", lg: "row" }}
      >
        {product ? (
          <>
            {/* slice image */}
            <ImageSlice images={product?.data.media} />
            {/* overview info */}
            <InfoProduct product={product} />
          </>
        ) : (
          <Skeleton w="100%" h="500px" />
        )}
      </Flex>

      <Flex mt={5} flexDirection={{ base: "column", lg: "row" }}>
        {/* see info product by image */}
        {product ? (
          <ImageProduct product={product} />
        ) : (
          <Stack w={{ base: "100%", lg: "600px" }}>
            <Skeleton height="100px" />
            <Skeleton height="100px" />
            <Skeleton height="100px" />
          </Stack>
        )}
        {/* rating and all comment */}
        <Comment productId={productId} ratingInfo={product?.data.rating_info} />
      </Flex>
    </Container>
  );
}

export default InfoPage;
