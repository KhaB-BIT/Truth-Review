import {
  Box,
  chakra,
  Flex,
  Grid,
  GridItem,
  Text,
  Tooltip,
} from "@chakra-ui/react";

function RatingOverView({ ratingInfo }) {
  console.log("rating", ratingInfo);
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      gap={6}
      px={6}
    >
      <GridItem
        w="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Text textAlign="center">
          <chakra.span fontSize="4xl" fontWeight="bold">
            {ratingInfo?.percent_star}
          </chakra.span>
          /5 ⭐⭐⭐⭐⭐
        </Text>
        <Text textAlign="center" fontSize="sm">
          Đây là thông tin người mua đánh giá shop bán sản phẩm này có đúng mô
          tả không
        </Text>
      </GridItem>
      <GridItem w="100%">
        <Flex alignItems="center">
          <Text fontSize="sm">5⭐</Text>
          <Box w={200} h="12px" bg="#f1f1f1" borderRadius="5px" m={2}>
            <Tooltip label={ratingInfo?.star5 + " lượt"}   fontSize="sm">
              <Box
                 w={(ratingInfo?.percent_star5 * 2).toString()+'px'}
                h="12px"
                bg="#fcd53f"
                borderRadius="5px"
                cursor="pointer"
              ></Box>
            </Tooltip>
          </Box>
          <Text fontSize="sm">{ratingInfo?.percent_star5}%</Text>
        </Flex>
        <Flex alignItems="center">
          <Text fontSize="sm">4⭐</Text>
          <Box w='200px' h="12px" bg="#f1f1f1" borderRadius="5px" m={2}>
            <Tooltip label={ratingInfo?.star4 + " lượt"}   fontSize="sm">
              <Box
                w={(ratingInfo?.percent_star4 * 2).toString()+'px'}
                h="12px"
                bg="#fcd53f"
                borderRadius="5px"
                cursor="pointer"
              ></Box>
            </Tooltip>
          </Box>
          <Text fontSize="sm">{ratingInfo?.percent_star4}%</Text>
        </Flex>
        <Flex alignItems="center">
          <Text fontSize="sm">3⭐</Text>
          <Box w={200} h="12px" bg="#f1f1f1" borderRadius="5px" m={2}>
            <Tooltip label={ratingInfo?.star3 + " lượt"}   fontSize="sm">
              <Box
                w={(ratingInfo?.percent_star3 * 2).toString()+'px'}
                h="12px"
                bg="#fcd53f"
                borderRadius="5px"
                cursor="pointer"
              ></Box>
            </Tooltip>
          </Box>
          <Text fontSize="sm">{ratingInfo?.percent_star3}%</Text>
        </Flex>
        <Flex alignItems="center">
          <Text fontSize="sm">2⭐</Text>
          <Box w={200} h="12px" bg="#f1f1f1" borderRadius="5px" m={2}>
            <Tooltip label={ratingInfo?.star2 + " lượt"}   fontSize="sm">
              <Box
                 w={(ratingInfo?.percent_star2 * 2).toString()+'px'}
                h="12px"
                bg="#fcd53f"
                borderRadius="5px"
                cursor="pointer"
              ></Box>
            </Tooltip>
          </Box>
          <Text fontSize="sm">{ratingInfo?.percent_star2}%</Text>
        </Flex>
        <Flex alignItems="center">
          <Text fontSize="sm">1⭐</Text>
          <Box w={200} h="12px" bg="#f1f1f1" borderRadius="5px" m={2}>
            <Tooltip label={ratingInfo?.star1 + " lượt"}   fontSize="sm">
              <Box
                 w={(ratingInfo?.percent_star1 * 2).toString()+'px'}
                h="12px"
                bg="#fcd53f"
                borderRadius="5px"
                cursor="pointer"
              ></Box>
            </Tooltip>
          </Box>
          <Text fontSize="sm">{ratingInfo?.percent_star1}%</Text>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default RatingOverView;
