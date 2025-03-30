import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useRouter } from 'next/router'

const Portfolio = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  return (
    <div className="akhil-home--projects w-full basis-full md:basis-[calc(50%-1rem/2)] lg:basis-[calc(30%-1rem*2/3)] xl:basis-[calc(25%-1rem*2/3)] bg-[#fff] dark:bg-[#1B1919] shadow-2 dark:shadow-[0] border border-[#eaebf0] dark:border-[#403D3D] rounded-[1.25rem] p-[0.938rem] pt-[1.875rem] pb-[2rem] cursor-pointer" onClick={() => router.push("/featured-projects")}>
      <div className="slider-wrapper w-[170px] m-auto mb-[0]">
        <div className="title font-primaryFont font-bold text-[1.75rem] text-center relative top-[16px] bg-text-gradient-2 dark:bg-text-gradient bg-clip-text	text-transparent">MY WORKS</div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1500 }}
          spaceBetween={5}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="image-wrapper text-center">
              <Image
                className="inline-block w-full"
                src={theme==="dark"? "/images/home/project-1.png":"/images/home/light/project-1.png"}
                width={170}
                height={91}
                alt="right-arrow"
                quality={100}
                unoptimized
              />
              <span className="screen-border inline-block w-[100px] h-[3px] bg-[#E5E5E5] dark:bg-[#3B3838] mt-[4px] relative bottom-[10px]"></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-wrapper text-center">
              <Image
                className="inline-block w-[170px] h-[91px]"
                src={theme==="dark"? "/images/home/project-2.png":"/images/home/light/project-2.png"}
                width={170}
                height={91}
                alt="right-arrow"
                quality={100}
                unoptimized
              />
              <span className="screen-border inline-block w-[100px] h-[3px] bg-[#E5E5E5] dark:bg-[#3B3838] mt-[4px] relative bottom-[10px]"></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-wrapper text-center">
              <Image
                className="inline-block w-[170px] h-[91px]"
                src={theme==="dark"? "/images/home/project-3.png":"/images/home/light/project-3.png"}
                width={170}
                height={91}
                alt="right-arrow"
                quality={100}
                unoptimized
              />
              <span className="screen-border inline-block w-[100px] h-[3px] bg-[#E5E5E5] dark:bg-[#3B3838] mt-[4px] relative bottom-[10px]"></span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="content-wrapper pl-[0.625rem] pr-[0.937rem]">
        <div className="title">
          <h4 className="title-sm font-primaryFont font-semibold text-[0.875rem] text-[#2196f3] dark:text-[#00E5FF] mb-[0.5rem]">WORKS</h4>
          <div className="title-lg font-primaryFont font-semibold text-[1.25rem] text-[#333] dark:text-white relative">
            Portfolio
            <span className="navigator text-right absolute right-[-5px] sm:right-[-10px] top-[50%] translate-y-[-50%] cursor-pointer">
              <Image
                className="inline-block"
                src={theme === "dark" ? "/images/home/right-arrow.svg":"/images/home/light/right-arrow.svg"}
                width={32}
                height={32}
                alt="right-arrow"
                quality={100}
                unoptimized
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Portfolio;