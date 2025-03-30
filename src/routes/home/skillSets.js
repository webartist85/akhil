import Image from 'next/image';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { ThemeContext } from '../../context/ThemeContext';

const SkillSets = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  return (
    <div className="akhil-home--skill-sets w-full basis-full md:basis-[calc(50%-1rem/2)] lg:basis-[calc(40%-1rem*2/3)] xl:basis-[calc(50%-1rem*2/3)] bg-[#fff] dark:bg-[#1B1919] shadow-2 dark:shadow-[0] border border-[#eaebf0] dark:border-[#403D3D] rounded-[1.25rem] p-[0.938rem] pb-[2rem] flex flex-col justify-between group cursor-pointer" onClick={() => router.push("/technical-expertise")}>
      <div className="image-wrapper flex flex-wrap items-center justify-center gap-[1.25rem] md:gap-[1rem] lg:gap-[1.25rem] pt-[1.25rem] xs:pt-[3.75rem] mb-[2rem] md:mb-0">
        <span className="figma transition duration-500 ease-in-out group-hover:rotate-[360deg]">
          <Image
            className="w-[40px] h-[40px] xs:w-[50px] xs:h-[50px]"
            src={theme === "dark"? "/images/home/figma.svg":"/images/home/light/figma.svg"}
            width={50}
            height={50}
            alt="figma"
            quality={100}
            unoptimized
          />
        </span>
        <span className="html transition duration-500 ease-in-out group-hover:rotate-[360deg]">
          <Image
            className="w-[40px] h-[40px] xs:w-[50px] xs:h-[50px]"
            src={theme === "dark"? "/images/home/html.svg":"/images/home/light/html.svg"}
            width={50}
            height={50}
            alt="html"
            quality={100}
            unoptimized
          />
        </span>
        <span className="antd transition duration-500 ease-in-out group-hover:rotate-[360deg]">
          <Image
            className="w-[40px] h-[40px] xs:w-[50px] xs:h-[50px]"
            src={theme === "dark"? "/images/home/ant-design.svg":"/images/home/light/ant-design.svg"}
            width={50}
            height={50}
            alt="scss"
            quality={100}
            unoptimized
          />
        </span>
        <span className="react transition duration-500 ease-in-out group-hover:rotate-[360deg]">
          <Image
            className="w-[40px] h-[40px] xs:w-[50px] xs:h-[50px]"
            src={theme === "dark"? "/images/home/react.svg":"/images/home/light/react.svg"}
            width={50}
            height={50}
            alt="react"
            quality={100}
            unoptimized
          />
        </span>
        <span className="tailwind transition duration-500 ease-in-out group-hover:rotate-[360deg]">
          <Image
            className="w-[40px] h-[40px] xs:w-[50px] xs:h-[50px]"
            src={theme === "dark"? "/images/home/tailwind.svg":"/images/home/light/tailwind.svg"}
            width={50}
            height={50}
            alt="tailwind"
            quality={100}
            unoptimized
          />
        </span>
      </div>
      <div className="content-wrapper pl-[0.625rem] pr-[0.937rem]">
        <div className="title">
          <h4 className="title-sm font-primaryFont font-semibold text-[0.875rem] text-[#2196f3] dark:text-[#00E5FF] mb-[0.5rem]">SKILL SETS</h4>
          <div className="title-lg font-primaryFont font-semibold text-[1.25rem] text-[#333] dark:text-white relative">
            Technical Expertise
            <span className="navigator text-right absolute right-[-5px] sm:right-[-10px] top-[50%] translate-y-[-50%] cursor-pointer">
              <Image
                className="inline-block w-[32px]"
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
export default SkillSets;