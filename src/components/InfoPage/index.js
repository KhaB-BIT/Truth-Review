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
import { FaShoppingBag, FaCheckCircle, FaShippingFast} from "react-icons/fa";

function InfoPage() {
  return (
    <Container maxW="container.xl">
      <Flex>
        <Box w={"600px"} bgColor='white' borderRadius='20px' marginRight='30px'>
          <Img src="https://media3.scdn.vn/img4/2022/08_15/EOAb2r7Ie3itb4NCr7Lp_simg_ab1f47_350x350_maxb.jpg" />
        </Box>

        <Box bgColor='white' p={6} borderRadius='20px' flex={1}>
          <Text fontSize="xl" fontWeight="bold">
            Chuột Quang không dây 2.4GHz ROBOT M220 Khoảng cách tín hiệu 20m
            công nghệ cảm biến quang học 1600DPI - M220
          </Text>
          <Text fontSize="xl" color="red" fontWeight="bold" my={2}>
            99.000đ
          </Text>
          <Text my={2}>
            <chakra.span textDecoration="line-through">190.000đ</chakra.span>{" "}
            <chakra.span color="red" ml={1}>Giảm 48%</chakra.span>
          </Text>
          <Flex w='230px' my={4}>
            <Flex>
              <Center>
                <Icon as={StarIcon} mr={1} color="orange" />
                <Icon as={StarIcon} mr={1} color="orange" />
                <Icon as={StarIcon} mr={1} color="orange" />
                <Icon as={StarIcon} mr={1} color="orange" />
                <Icon as={StarIcon} mr={1} color="orange" />
                <Text ml={1} h="18px">
                  22
                </Text>
              </Center>
            </Flex>
            <Spacer />
            <Flex>
              <Center>
                <Icon as={FaShoppingBag} />
                <Text ml={2} h="18px">
                  120
                </Text>
              </Center> 
            </Flex>
          </Flex>
          <Divider />
          <Text fontSize='lg' mb={2} mt={1}>Quyền lợi khách hàng </Text>
          <Flex justifyContent='space-evenly'>
            <Flex alignItems='center'><Icon color='green' as={FaCheckCircle} mr={2}/> Miễn phí hoàn trả</Flex>
            <Flex alignItems='center'><Icon color='green' as={FaCheckCircle} mr={2}/> 7 ngày hoàn trả</Flex>
            <Flex alignItems='center'><Icon color='blue' as={FaShippingFast} mr={2}/> Miễn phí vận chuyển</Flex>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}

export default InfoPage;
