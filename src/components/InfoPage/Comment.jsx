import { Box, Divider, Image, Text, chakra, Flex, Button, Icon } from "@chakra-ui/react";
import CommentIten from "./CommentItem";
import axios from "axios";
import { useEffect, useState } from "react";
import emptyBox from "../../assets/emptybox.png";
import CommentSkeleton from "./CommentSkeleton";
import RatingOverView from "./Rating";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

function Comment({ productId, ratingInfo }) {
  const [comments, setComments] = useState();
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  console.log("render");
  useEffect(() => {
    axios
      .get(
        `https://ratingapi.sendo.vn/product/${productId}/rating?page=${page}&limit=30&sort=review_score&v=2&star=all`
      )
      .then((res) => {
        setTotalPage(res.data.meta_data.total_page)
        setComments(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, productId]);

  return (
    <Box
      flex={1}
      ml={{ lg: 6 }}
      mt={{ base: 6, lg: 0 }}
      bg="#fff"
      borderRadius="20px"
      h="fit-content"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;"
    >
      <Text fontSize="xl" pl={6} pt={6}>
        Đánh giá nhận xét về sản phẩm{" "}
        <chakra.span fontSize="md" as="cite">
          {" "}
          ({ratingInfo?.total_rated} lượt đánh giá)
        </chakra.span>
      </Text>
      <Divider my={3} />

      <RatingOverView ratingInfo={ratingInfo} />

      <Divider my={3} />

      {comments == null ? (
        <CommentSkeleton />
      ) : comments.length === 0 ? (
        <Box textAlign="center">
          <Image boxSize="200px" src={emptyBox} m="auto" />
          <Text mb={6}>Chưa có bình luận nào cho sản phẩm này !</Text>
        </Box>
      ) : (
        <Box
          maxH={{ base: "70vh", md: "80vh" }}
          overflowY="scroll"
          p={{ base: 3, lg: 6 }}
        >
          {comments?.map((item) => {
            return <CommentIten key={item.rating_id} data={item} />;
          })}

          <Flex p={3} justifyContent="center">
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
        </Box>
      )}
    </Box>
  );
}

export default Comment;
