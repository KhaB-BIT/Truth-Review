import { Grid, GridItem, Skeleton } from "@chakra-ui/react";

function SkeletonListProducts() {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={{ base: 4, lg: 8 }}
      w="950px" maxW='100%'
    >
      {[...Array(6)].map((e, index) => (
        <GridItem display='flex' justifyContent='center' key={index}>
          <Skeleton w="100%" h="450px" maxW='300px' />
        </GridItem>
      ))}
    </Grid>
  );
}

export default SkeletonListProducts;
