import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";

// Import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";


// import required modules
import { Pagination, Navigation } from "swiper";
import { FreeMode, Thumbs } from "swiper";


// import Images
import img1 from "../Images/car1.jpg"
import img2 from "../Images/car2.jpg"
import img3 from "../Images/car3.jpg"
import img4 from "../Images/car4.jpg"
import img5 from "../Images/car5.jpg"
import img6 from "../Images/car6.jpg"
import img7 from "../Images/car7.jpg"

function Home() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[ Navigation, Thumbs, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1}  alt=''></img>
        </SwiperSlide>

        <SwiperSlide>
        <img src={img2} alt=''></img>
        </SwiperSlide>
        
        <SwiperSlide>
        <img src={img3}  alt=''></img>
        </SwiperSlide>

        <SwiperSlide>
        <img src={img4}  alt=''></img>
        </SwiperSlide>
        
        <SwiperSlide>
        <img src={img5}  alt=''></img>
        </SwiperSlide>

        <SwiperSlide>
        <img src={img6}  alt=''></img>
        </SwiperSlide>

        <SwiperSlide>
        <img src={img7}  alt=''></img>
        </SwiperSlide>
       
      </Swiper>  

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1}  alt=''></img>
        </SwiperSlide>

        <SwiperSlide>
        <img src={img2} alt=''></img>
        </SwiperSlide>
        
        <SwiperSlide>
        <img src={img3}  alt=''></img>
        </SwiperSlide>

        <SwiperSlide>
        <img src={img4}  alt=''></img>
        </SwiperSlide>
        
        <SwiperSlide>
        <img src={img5}  alt=''></img>
        </SwiperSlide>

        <SwiperSlide>
        <img src={img6}  alt=''></img>
        </SwiperSlide>

        <SwiperSlide>
        <img src={img7}  alt=''></img>
        </SwiperSlide>
       
      </Swiper>  

    </>
  )
}
 

export default Home
