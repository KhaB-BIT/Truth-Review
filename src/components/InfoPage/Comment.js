import { Box, Divider, Text } from "@chakra-ui/react";
import CommentIten from "./CommentItem";
import { datacomment } from "./datainfo";

function Comment() {
  return (
    <Box  p={6} flex={1} ml={8} mt={8} bg="#fff" borderRadius='20px'>
      <Text fontSize='xl'>Bình luận về sản phẩm</Text>
        <Divider my={3}/>
      <Box  h='100vh' overflowY='scroll'>
        {datacomment.data.map((item) => {
            return <CommentIten key={item.rating_id} data={item}/>
        })}
      </Box>
    </Box>
  );
}

export default Comment;
