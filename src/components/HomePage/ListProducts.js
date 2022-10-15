import { Box, Flex, Grid, GridItem, Icon, Img, Text, useDisclosure } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import Product from "./Product";
import data, { category } from "./data";
import InfoPage from "../InfoPage";
import { ArrowBackIcon } from "@chakra-ui/icons";

function ListProducts() {
  const seeCategoryInSendo = (link) => {
    window.open(link)
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Text fontSize="3xl" my={4}>
        Review nổi bật
      </Text>

      <Flex>
        <Grid templateColumns="repeat(3, 1fr)" gap={8} w="950px">
          {data.data.list.map((item, index) => {
            return (
              <GridItem w="100%" key={index} onClick={onOpen}>
                <Product value={item} />
              </GridItem>
            );
          })}
        </Grid>

        <Box ml={8} flex={1}>
          <Text>Trending topics</Text>
          {category.data.collections.map((item) => {
            return (
              <Flex key={item.id} my={4} onClick={() => seeCategoryInSendo(item.listing_link)} cursor='pointer'>
                <Img
                  w="100px"
                  h="60px"
                  objectFit="cover"
                  borderRadius='5px'
                  src={item.image_url}
                />
                <Box ml={3} flex={1}>
                  <Text>{item.name}</Text>
                  <Text fontSize="xs">{item.product_total} sản phẩm</Text>
                </Box>
              </Flex>
            );
          })}
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size='full'>
        <ModalContent bgColor='#f0f2f5'>
          <Flex w='50px' h='50px' margin={4} bg='white' borderRadius='50%' cursor='pointer'>
            <Icon as={ArrowBackIcon} onClick={onClose} fontSize='4xl' m='auto'/>
          </Flex>
          <ModalBody>
            <InfoPage/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ListProducts;
