import { Box, Img } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

function ImageSlice({ images }) {
  return (
    <Box w="600px" bgColor="white" borderRadius="20px" marginRight="30px">
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
              <Img src={item.image_500x500} m='auto'/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}

export default ImageSlice;
