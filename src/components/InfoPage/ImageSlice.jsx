import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import fallback500 from '../../assets/fallback500.jpg'

function ImageSlice({ images }) {
  return (
    <Box
      w={{ base: "100%", lg: "600px" }}
      bgColor="white"
      borderRadius="20px"
      marginRight="30px"
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {images?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Image src={item.image_500x500} m="auto" borderRadius="20px" fallbackSrc={fallback500} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}

export default ImageSlice;
