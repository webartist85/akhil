import Image from 'next/image';
import React, { useContext } from 'react';
import { useRouter } from 'next/router'
import { ThemeContext } from '../../context/ThemeContext';

const About = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  return (
    <div className="akhil-home--about appearance-none	w-full basis-full lg:basis-[calc(50%-1rem/2)] bg-[#fff] dark:bg-[#1B1919] shadow-2 dark:shadow-[0] border border-[#eaebf0] dark:border-[#403D3D] rounded-[1.25rem] pl-[1rem] pr-[1rem] pt-[1.5rem] pb-[1.5rem] xs:p-[1.5rem] md:p-[2.813rem] md:pr-[1.875rem] flex flex-wrap items-start md:items-center gap-[1.25rem] xs:gap-[1.875rem] relative cursor-pointer" onClick={() => router.push("/about")}>
      <div className="image-wrapper">
        <Image
          className="w-[50px] h-[50px] xs:w-[80px] xs:h-[80px] md:w-[224px] md:h-[224px] rounded-full xs:rounded-[0] brightness-[1.1]"
          src={theme === "dark" ? "/images/home/profile-image.png" : "/images/home/light/profile-image.png"}
          width={224}
          height={224}
          alt="about-image"
          quality={100}
          unoptimized
        />
    
      </div>
      <div className="content-wrapper max-w-[calc(100%-(50px+1.25rem))] xs:max-w-[calc(100%-(80px+1.875rem))] md:max-w-[calc(100%-(224px+1.875rem))]">
        <div className="designation">
          <h4 className="font-primaryFont font-semibold text-[0.875rem] text-[#2196f3] dark:text-[#00E5FF] mb-[0.5rem]">A WEB DEVELOPER</h4>
        </div>
        <div className="name font-primaryFont font-semibold text-[1.5rem]/[2rem] xs:text-[2.25rem]/[2.5rem] text-[#333333] dark:text-white mb-[1rem]">
          Akhil Jayasree
        </div>
        <div className="description font-primaryFont font-medium  text-[0.875rem]/[1.375rem] text-[#000] dark:text-[#DCD8D8] max-w-[12rem]">
          I am a Web Developer based
          in Kochi, India.
        </div>
        <div className="navigator text-right absolute right-[1.25rem] xs:right-[20px] bottom-[28px] cursor-pointer">
          <Image
            className="inline-block"
            src={theme === "dark" ? "/images/home/right-arrow.svg" : "/images/home/light/right-arrow.svg"}
            width={32}
            height={32}
            alt="right-arrow"
            quality={100}
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}
export default About;