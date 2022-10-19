import { Flex, Container } from "@chakra-ui/react";

import axios from "axios";
import "../../styles/InfoPage.scss";
import { useEffect, useState } from "react";

import Comment from "./Comment";
import ImageSlice from "./ImageSlice";
import InfoProduct from "./InfoProduct";
import ImageProduct from "./ImageProduct";

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
    <Container maxW="container.xl" p={0}>
      <Flex
        bg="white"
        borderRadius="20px"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <ImageSlice images={product?.data.media} />
        <InfoProduct product={product} />
      </Flex>

      <Flex mt={5} flexDirection={{ base: "column", lg: "row" }}>
        <ImageProduct product={product} />
        <Comment productId={productId} />
      </Flex>
    </Container>
  );
}

export default InfoPage;
