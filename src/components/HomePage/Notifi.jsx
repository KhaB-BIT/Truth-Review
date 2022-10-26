import {
  Alert,
  Flex,
  CloseButton,
  useDisclosure,
  AlertDescription,
  Center,
  Spacer,
} from "@chakra-ui/react";

function Notifi() {
  const { isOpen: isVisible, onClose } = useDisclosure({ defaultIsOpen: true });

  return isVisible ? (
    <Flex justifyContent="flex-end">
      <Alert
        status="info"
        mt={3}
        borderRadius="5px"
        w={{ base: "100%", md: "fit-content" }}
      >
        <Flex>
          <Center>
            <AlertDescription pr={6} fontSize={{ base: "sm", md: "md" }}>
              Ở đây, chúng tôi review mọi thứ bạn cần
            </AlertDescription>
            <Spacer />
            <CloseButton onClick={onClose} />
          </Center>
        </Flex>
      </Alert>
    </Flex>
  ) : (
    ""
  );
}

export default Notifi;
