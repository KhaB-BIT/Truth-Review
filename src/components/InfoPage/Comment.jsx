import {
  Box,
  Divider,
  Image,
  Text,
  chakra,
} from "@chakra-ui/react";
import CommentIten from "./CommentItem";
import axios from "axios";
import { useEffect, useState } from "react";
import emptyBox from "../../assets/empty box.png";
import CommentSkeleton from "./CommentSkeleton";
import RatingOverView from "./Rating";

function Comment({ productId, ratingInfo }) {
  const [comments, setComments] = useState();
  console.log("render");
  useEffect(() => {
    axios
      .get(
        `https://ratingapi.sendo.vn/product/${productId}/rating?page=1&limit=30&sort=review_score&v=2&star=all`
      )
      .then((res) => {
        setComments(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  return (
    <Box
      flex={1}
      ml={{lg: 6}}
      mt={{base: 6, lg: 0}}
      bg="#fff"
      borderRadius="20px"
      h="fit-content"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;"
    >
      <Text fontSize="xl" pl={6} pt={6}>
        Đánh giá nhận xét về sản phẩm <chakra.span fontSize='md' as='cite'> ({ratingInfo?.total_rated} lượt đánh giá)</chakra.span>
      </Text>
      <Divider my={3} />

      <RatingOverView ratingInfo={ratingInfo} />

      <Divider my={3} />

      {comments == null ? (
        <CommentSkeleton/>
      ) : comments.length === 0 ? (
        <Box textAlign="center">
          <Image boxSize="200px" src={emptyBox} m="auto" />
          <Text mb={6}>Chưa có bình luận nào cho sản phẩm này !</Text>
        </Box>
      ) : (
        <Box maxH={{base: '70vh', md: '80vh'}} overflowY="scroll" p={{base: 3, lg: 6}}>
          {comments?.map((item) => {
            return <CommentIten key={item.rating_id} data={item} />;
          })}
        </Box>
      )}
    </Box>
  );
}

export default Comment;
