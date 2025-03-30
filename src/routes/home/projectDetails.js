import Image from 'next/image';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { ThemeContext } from '../../context/ThemeContext';

const ProjectDetails = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  return (
    <div className="akhil-home--project-details basis-[calc(50%-1rem/2)] bg-[#fff] dark:bg-[#1B1919] shadow-2 dark:shadow-[0] border border-[#eaebf0] dark:border-[#403D3D] rounded-[1.25rem] p-[0.938rem] xs:pb-[2rem] relative cursor-pointer" onClick={() => router.push("/project-details")}>
      <div className="image-wrapper text-center mb-[1.5rem]">
        {
          theme === "dark" ?
            <Image
              className="inline-block w-full"
              src="/images/home/project-details.png"
              width={237}
              height={150}
              alt="project-details"
              quality={100}
              unoptimized
            />
            : <Image
              className="inline-block w-full"
              src="/images/home/light/project-details.png"
              width={237}
              height={150}
              alt="project-details"
              quality={100}
              unoptimized
            />
        }
      </div>
      <div className="content-wrapper sm:pl-[0.625rem] sm:pr-[0.937rem]">
        <div className="title">
          <h4 className="title-sm font-primaryFont font-semibold text-[0.875rem] text-[#2196F3] dark:text-[#00E5FF] mb-[0.5rem]">JOB ROLE</h4>
          <div className="title-lg font-primaryFont font-semibold text-[1rem] xs:text-[1.25rem] text-[#333] dark:text-white relative">
            Project Details
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
  )
}
export default ProjectDetails;