"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const Carousel = () => {


  return (
    <Swiper
      className="py-20"
      modules={[Navigation]}
      spaceBetween={10}
      centeredSlides={false}
      initialSlide={1.2}
      slidesPerView= {1.2}
      loop= {true}
      autoplay={true}
      navigation
      breakpoints={{
        640: {
          slidesPerView: 1.4,
          spaceBetween: 10,
          initialSlide: 1,
        },
        1024: {
          slidesPerView: 4.5,
          spaceBetween: 10,
          initialSlide: 1,
        },
      }}
    >
      <SwiperSlide className="carousel-card">
        <div className="swiper-card flex flex-col gap-2 bg-[#594ce910]  rounded-[36px] md:p-[40px] p-[24px]">
          <div className="inside">
            <h4 className="mb-3 font-[400] text-[36px] text-[#594CE9] text-center">Develop</h4>
            {/* <img src="assets/w1.png" className="w-full mb-4" alt="" /> */}
            <div>
            <a href="javascript:void(0)" className="border border-[#594CE9] text-[16px] font-[400] text-[#594CE9] hover:text-[#fff] text-16px hover:bg-[#594CE9] 
            transition-all rounded-[8px] block mb-2 text-center w-full py-3">DeFi</a>
            <a href="javascript:void(0)" className="border border-[#594CE9] text-[16px] font-[400] text-[#594CE9] hover:text-[#fff] text-16px hover:bg-[#594CE9] 
            transition-all rounded-[8px] block mb-2 text-center w-full py-3">Artificial Intelligence</a>
            <a href="javascript:void(0)" className="border border-[#594CE9] text-[16px] font-[400] text-[#594CE9] hover:text-[#fff] text-16px hover:bg-[#594CE9] 
            transition-all rounded-[8px] block mb-2 text-center w-full py-3">Gaming</a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="carousel-card">
        <div className="swiper-card flex flex-col gap-2 bg-[#594ce910]  rounded-[36px] p-[40px]">
          <div className="inside">
            <h4 className="mb-3 font-[400] text-[36px] text-[#594CE9] text-center">Token</h4>
            {/* <img src="assets/w1.png" className="w-full mb-4" alt="" /> */}
            <div>
            <a href="javascript:void(0)" className="border border-[#594CE9] text-[16px] font-[400] text-[#594CE9] hover:text-[#fff] text-16px hover:bg-[#594CE9] 
            transition-all rounded-[8px] block mb-2 text-center w-full py-3">Self-Custodial</a>
            <a href="javascript:void(0)" className="border border-[#594CE9] text-[16px] font-[400] text-[#594CE9] hover:text-[#fff] text-16px hover:bg-[#594CE9] 
            transition-all rounded-[8px] block mb-2 text-center w-full py-3">Audient Contract</a>
            <a href="javascript:void(0)" className="border border-[#594CE9] text-[16px] font-[400] text-[#594CE9] hover:text-[#fff] text-16px hover:bg-[#594CE9] 
            transition-all rounded-[8px] block mb-2 text-center w-full py-3">Finished Product</a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="carousel-card">
        <div className="swiper-card flex flex-col gap-2 bg-[#594ce910]  rounded-[36px] p-[40px]">
          <div className="inside">
            <h4 className="mb-3 font-[400] text-[36px] text-[#594CE9] text-center">Smart 
            contracts</h4>
            {/* <img src="assets/w1.png" className="w-full mb-4" alt="" /> */}
            <div>
            <a href="javascript:void(0)" className="border border-[#594CE9] text-[16px] font-[400] text-[#594CE9] hover:text-[#fff] text-16px hover:bg-[#594CE9] 
            transition-all rounded-[8px] block mb-2 text-center w-full py-3">EVM Compatible</a>
            <a href="javascript:void(0)" className="border border-[#594CE9] text-[16px] font-[400] text-[#594CE9] hover:text-[#fff] text-16px hover:bg-[#594CE9] 
            transition-all rounded-[8px] block mb-2 text-center w-full py-3">Scalable</a>
            <a href="javascript:void(0)" className="border border-[#594CE9] text-[16px] font-[400] text-[#594CE9] hover:text-[#fff] text-16px hover:bg-[#594CE9] 
            transition-all rounded-[8px] block mb-2 text-center w-full py-3">Generic</a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="carousel-card">
        <div className="swiper-card flex flex-col gap-2 bg-[#594ce910]  rounded-[36px] p-[40px]">
          <div className="inside">
            <h4 className="mb-3 font-[400] text-[36px] text-[#594CE9] text-center">Develop</h4>
            {/* <img src="assets/w1.png" className="w-full mb-4" alt="" /> */}
            <div>
            <a href="javascript:void(0)" className="border border-[#594CE9] text-[16px] font-[400] text-[#594CE9] hover:text-[#fff] text-16px hover:bg-[#594CE9] 
            transition-all rounded-[8px] block mb-2 text-center w-full py-3">DeFi</a>
            <a href="javascript:void(0)" className="border border-[#594CE9] text-[16px] font-[400] text-[#594CE9] hover:text-[#fff] text-16px hover:bg-[#594CE9] 
            transition-all rounded-[8px] block mb-2 text-center w-full py-3">Artificial Intelligence</a>
            <a href="javascript:void(0)" className="border border-[#594CE9] text-[16px] font-[400] text-[#594CE9] hover:text-[#fff] text-16px hover:bg-[#594CE9] 
            transition-all rounded-[8px] block mb-2 text-center w-full py-3">Gaming</a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="carousel-card">
        <div className="swiper-card flex flex-col gap-2 bg-[#594ce910]  rounded-[36px] p-[40px]">
          <div className="inside">
            <h4 className="mb-3 font-[400] text-[36px] text-[#594CE9] text-center">Token</h4>
            {/* <img src="assets/w1.png" className="w-full mb-4" alt="" /> */}
            <div>
            <a href="javascript:void(0)" className="border border-[#594CE9] text-[16px] font-[400] text-[#594CE9] hover:text-[#fff] text-16px hover:bg-[#594CE9] 
            transition-all rounded-[8px] block mb-2 text-center w-full py-3">Self-Custodial</a>
            <a href="javascript:void(0)" className="border border-[#594CE9] text-[16px] font-[400] text-[#594CE9] hover:text-[#fff] text-16px hover:bg-[#594CE9] 
            transition-all rounded-[8px] block mb-2 text-center w-full py-3">Audient Contract</a>
            <a href="javascript:void(0)" className="border border-[#594CE9] text-[16px] font-[400] text-[#594CE9] hover:text-[#fff] text-16px hover:bg-[#594CE9] 
            transition-all rounded-[8px] block mb-2 text-center w-full py-3">Finished Product</a>
            </div>
          </div>
        </div>
      </SwiperSlide>
       

    
    </Swiper>
  );
};

export default Carousel;