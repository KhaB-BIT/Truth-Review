import { Skeleton, Stack } from "@chakra-ui/react";

function CategorySkeleton() {
  return (
    <Stack>
      {[...Array(6)].map((e, index) => (
        <Skeleton key={index} height="70px" />
      ))}
    </Stack>
  );
}

export default CategorySkeleton;
