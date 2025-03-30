import Image from 'next/image';
import TimeLine from './timeLine';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useState } from 'react';

const WorkHistory = () => {
  const [showTimeLine, setShowTimeLine] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="akhil-home--work-history basis-[calc(50%-1rem/2)] bg-[#fff] dark:bg-[#1B1919] shadow-2 dark:shadow-[0] border border-[#eaebf0] border-[#f2f2f2] dark:border-[#403D3D] rounded-[1.25rem] p-[0.938rem] xs:pb-[2rem] relative cursor-pointer" onClick={() => setShowTimeLine(true)}>
        <div className="image-wrapper text-center mb-[1.5rem]">
          <Image
            className="inline-block w-full"
            src={theme === "dark" ? "/images/home/work-history.png" : "/images/home/light/work-history.png"}
            width={237}
            height={150}
            alt="projects"
            quality={100}
            unoptimized
          />
        </div>
        <div className="content-wrapper sm:pl-[0.625rem] sm:pr-[0.937rem]">
          <div className="title">
            <h4 className="title-sm font-primaryFont font-semibold text-[0.875rem] text-[#2196F3] dark:text-[#00E5FF] mb-[0.5rem]">JOB RECORDS</h4>
            <div className="title-lg font-primaryFont font-semibold text-[1rem] xs:text-[1.25rem] text-[#333] dark:text-white relative">
              Work History
              <span className="navigator text-right absolute right-[-5px] sm:right-[-10px] top-[50%] translate-y-[-50%] cursor-pointer">
                <Image
                  className="inline-block w-[20px] xs:w-[32px]"
                  src={theme === "dark" ? "/images/home/right-arrow.svg" : "/images/home/light/right-arrow.svg"}
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
      <TimeLine open={showTimeLine} close={() => setShowTimeLine(false)} />
    </>
  )
}
export default WorkHistory;