import {
  Alert,
  AlertDescription,
  Box,
  CloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function Notifi() {
  const { isOpen: isVisible, onClose } = useDisclosure({ defaultIsOpen: true });

  return isVisible ? (
    <Box display="flex" justifyContent="flex-end">
      <Alert status="info" w="fit-content" mt={3} borderRadius='5px'>
        <Box>
          <AlertDescription pr={6}>Ở đây, chúng tôi review mọi thứ bạn cần</AlertDescription>
        </Box>
        <CloseButton
          position="relative"
          right='-14px'
          top='-14px'
          onClick={onClose}
        />
      </Alert>
    </Box>
  ) : (
    ""
  );
}

export default Notifi;
