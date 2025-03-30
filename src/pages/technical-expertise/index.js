import BreadCrumb from "@import/components/breadcrumb";
import Layout from "@import/components/layout";
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Page = () => {
    const { theme } = useContext(ThemeContext);

    const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });
    const figma = useSpring({ width: '40%', from: { width: '0%' } });
    const css = useSpring({ width: '80%', from: { width: '0%' } });
    const scss = useSpring({ width: '80%', from: { width: '0%' } });
    const tailwind = useSpring({ width: '70%', from: { width: '0%' } });
    const html = useSpring({ width: '80%', from: { width: '0%' } });
    const javascript = useSpring({ width: '35%', from: { width: '0%' } });
    const react = useSpring({ width: '50%', from: { width: '0%' } });
    const antd = useSpring({ width: '50%', from: { width: '0%' } });
    const nextjs = useSpring({ width: '40%', from: { width: '0%' } });
    
    return (
        <Layout>
            <main className="bg-[#f4f5f7] dark:bg-[#101010] min-h-[calc(100vh-(4rem+5.313rem))] sm:min-h-[calc(100vh-(5rem+8.75rem))] mt-[4rem] pt-[1rem] pb-[2.5rem] sm:mt-[5rem] sm:pt-[2.5rem]">
                <animated.div className={"duration-500 linear"} style={fadeIn}>
                    <div className="container">
                        <BreadCrumb title="TECHNICAL EXPERTISE" />
                        <div className="akhil-skills bg-[#fff] dark:bg-[#1B1919] border border-[#eaebf0] dark:border-[#403D3D] rounded-[0.5rem] md:rounded-[1.25rem] p-[1.25rem] pt-[2rem] xs:p-[2.188rem]">
                            <div className="akhil-skills--title mb-[2rem] lg:mb-[3.125rem]">
                                <h1 className="font-primaryFont font-medium text-[2rem]/[2.25rem] xs:text-[2.25rem]/[2.5rem] text-[#333] dark:text-[#fff]">
                                    <span className="text-[#2196f3]">Technical</span>{" "}Expertise
                                </h1>
                            </div>
                            <div className="akhil-skills--charts flex flex-wrap gap-[1.25rem]">
                                <div className="akhil-skills--charts--card w-full basis-full lg:basis-[calc(50%-1.25rem/2)] bg-white dark:bg-[#101010] shadow-2 dark:shadow-[0] pl-[1rem] pr-[1rem] pt-[1.5rem] xs:p-[1.5rem] pb-[2rem] border border-[#eaebf0] dark:border-[#403D3D] rounded-[0.5rem] md:rounded-[1rem]">
                                    <h4 className="akhil-skills--charts--title font-primaryFont font-semibold dark:font-medium text-[1rem]/[1.5rem] text-[#333] dark:text-[#f2f2f2] mb-[1.5rem]">FRONTEND DESIGN</h4>
                                    <ul className="akhil-skills--charts--list flex flex-col gap-[1rem]">
                                        <li className="figma border border-[#eaebf0] dark:border-[#403D3D] rounded-[0.5rem] flex flex-wrap">
                                            <span className="icon w-[40px] h-[40px] inline-flex items-center justify-center ">
                                                <Image
                                                    className="w-[16px] xs:w-[18px]"
                                                    src="/images/skill-sets/figma.png"
                                                    width={24}
                                                    height={34}
                                                    alt="figma"
                                                    quality={100}
                                                    unoptimized
                                                />
                                            </span>
                                            <animated.span className="progress pl-[1rem] font-primaryFont font-semibold text-[1rem] text-[#fff] inline-flex items-center bg-[#2196f3] dark:bg-[#1565c0] duration-1000 linear" style={figma}>
                                                Figma
                                            </animated.span>
                                        </li>
                                        <li className="css border border-[#eaebf0] dark:border-[#403D3D] rounded-[0.5rem] flex flex-wrap">
                                            <span className="icon w-[40px] h-[40px] inline-flex items-center justify-center ">
                                                <Image
                                                    className="w-[24px] xs:w-[25px]"
                                                    src="/images/skill-sets/css.png"
                                                    width={32}
                                                    height={32}
                                                    alt="css"
                                                    quality={100}
                                                    unoptimized
                                                />
                                            </span>
                                            <animated.span className="progress pl-[1rem] font-primaryFont font-semibold text-[1rem] text-[#fff] inline-flex items-center bg-[#2196f3] dark:bg-[#1565c0] duration-1000 linear" style={css}>
                                                CSS3
                                            </animated.span>
                                        </li>
                                        <li className="scss border border-[#eaebf0] dark:border-[#403D3D] rounded-[0.5rem] flex flex-wrap">
                                            <span className="icon w-[40px] h-[40px] inline-flex items-center justify-center ">
                                                <Image
                                                    className="w-[24px] xs:w-[25px]"
                                                    src="/images/skill-sets/scss.png"
                                                    width={32}
                                                    height={32}
                                                    alt="scss"
                                                    quality={100}
                                                    unoptimized
                                                />
                                            </span>
                                            <animated.span className="progress pl-[1rem] font-primaryFont font-semibold text-[1rem] text-[#fff] inline-flex items-center bg-[#2196f3] dark:bg-[#1565c0] duration-1000 linear" style={scss}>
                                                SCSS
                                            </animated.span>
                                        </li>
                                        <li className="tailwind border border-[#eaebf0] dark:border-[#403D3D] rounded-[0.5rem] flex flex-wrap">
                                            <span className="icon w-[40px] h-[40px] inline-flex items-center justify-center">
                                                <Image
                                                    className="w-[24px] xs:w-[25px]"
                                                    src="/images/skill-sets/tailwind.png"
                                                    width={32}
                                                    height={32}
                                                    alt="tailwind"
                                                    quality={100}
                                                    unoptimized
                                                />
                                            </span>
                                            <animated.span className="progress pl-[1rem] font-primaryFont font-semibold text-[1rem] text-[#fff] inline-flex items-center bg-[#2196f3] dark:bg-[#1565c0] duration-1000 linear" style={tailwind}>
                                                Tailwind
                                            </animated.span>
                                        </li>
                                        <li className="antd border border-[#eaebf0] dark:border-[#403D3D] rounded-[0.5rem] flex flex-wrap">
                                            <span className="icon w-[40px] h-[40px] inline-flex items-center justify-center ">
                                                <Image
                                                    className="w-[24px] xs:w-[25px]"
                                                    src="/images/skill-sets/antd.png"
                                                    width={32}
                                                    height={32}
                                                    alt="antd"
                                                    quality={100}
                                                    unoptimized
                                                />
                                            </span>
                                            <animated.span className="progress pl-[1rem] font-primaryFont font-semibold text-[1rem] text-[#fff] inline-flex items-center bg-[#2196f3] dark:bg-[#1565c0] whitespace-nowrap duration-1000 linear" style={antd}>
                                                Ant Design
                                            </animated.span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="akhil-skills--charts--card w-full basis-full lg:basis-[calc(50%-1.25rem/2)] bg-[#fff] dark:bg-[#101010] shadow-2 dark:shadow-[0] pl-[1rem] pr-[1rem] pt-[1.5rem] xs:p-[1.5rem] pb-[2rem] border border-[#eaebf0] dark:border-[#403D3D] rounded-[0.5rem] md:rounded-[1rem]">
                                    <h4 className="akhil-skills--charts--title font-primaryFont font-semibold dark:font-medium text-[1rem]/[1.5rem] text-[#333] dark:text-[#f2f2f2] mb-[1.5rem]">FRONTEND DEVELOPMENT</h4>
                                    <ul className="akhil-skills--charts--list flex flex-col gap-[1rem]">
                                        <li className="html border border-[#eaebf0] dark:border-[#403D3D] rounded-[0.5rem] flex flex-wrap">
                                            <span className="icon w-[40px] h-[40px] inline-flex items-center justify-center ">
                                                <Image
                                                    className="w-[24px] xs:w-[25px]"
                                                    src="/images/skill-sets/html.png"
                                                    width={32}
                                                    height={32}
                                                    alt="html5"
                                                    quality={100}
                                                    unoptimized
                                                />
                                            </span>
                                            <animated.span className="progress pl-[1rem] font-primaryFont font-semibold text-[1rem] text-[#fff] inline-flex items-center bg-[#2196f3] dark:bg-[#1565c0] duration-1000 linear" style={html}>
                                                Html5
                                            </animated.span>
                                        </li>
                                        <li className="javascript border border-[#eaebf0] dark:border-[#403D3D] rounded-[0.5rem] flex flex-wrap">
                                            <span className="icon w-[40px] h-[40px] inline-flex items-center justify-center ">
                                                <Image
                                                    className="w-[24px] xs:w-[25px]"
                                                    src="/images/skill-sets/javascript.png"
                                                    width={32}
                                                    height={32}
                                                    alt="javascript"
                                                    quality={100}
                                                    unoptimized
                                                />
                                            </span>
                                            <animated.span className="progress pl-[1rem] font-primaryFont font-semibold text-[1rem] text-[#fff] inline-flex items-center bg-[#2196f3] dark:bg-[#1565c0] duration-1000 linear" style={javascript}>
                                                Javascript
                                            </animated.span>
                                        </li>
                                        <li className="jquery border border-[#eaebf0] dark:border-[#403D3D] rounded-[0.5rem] flex flex-wrap">
                                            <span className="icon w-[40px] h-[40px] inline-flex items-center justify-center ">
                                                <Image
                                                    className="w-[24px] xs:w-[25px]"
                                                    src={theme === "dark" ? "/images/skill-sets/jquery.png":"/images/skill-sets/jquery-light.png"}
                                                    width={32}
                                                    height={32}
                                                    alt="javascript"
                                                    quality={100}
                                                    unoptimized
                                                />
                                            </span>
                                            <animated.span className="progress pl-[1rem] font-primaryFont font-semibold text-[1rem] text-[#fff] inline-flex items-center bg-[#2196f3] dark:bg-[#1565c0] duration-1000 linear" style={javascript}>
                                                jQuery
                                            </animated.span>
                                        </li>
                                        <li className="react border border-[#eaebf0] dark:border-[#403D3D] rounded-[0.5rem] flex flex-wrap">
                                            <span className="icon w-[40px] h-[40px] inline-flex items-center justify-center ">
                                                <Image
                                                    className="w-[24px] xs:w-[25px]"
                                                    src="/images/skill-sets/react.png"
                                                    width={32}
                                                    height={26}
                                                    alt="react"
                                                    quality={100}
                                                    unoptimized
                                                />
                                            </span>
                                            <animated.span className="progress pl-[1rem] font-primaryFont font-semibold text-[1rem] text-[#fff] inline-flex items-center bg-[#2196f3] dark:bg-[#1565c0] duration-1000 linear" style={react}>
                                                React
                                            </animated.span>
                                        </li>
                                        <li className="next border border-[#eaebf0] dark:border-[#403D3D] rounded-[0.5rem] flex flex-wrap">
                                            <span className="icon w-[40px] h-[40px] inline-flex items-center justify-center ">
                                                <Image
                                                    className="w-[30px]"
                                                    src="/images/skill-sets/nextjs.png"
                                                    width={32}
                                                    height={32}
                                                    alt="nextjs"
                                                    quality={100}
                                                    unoptimized
                                                />
                                            </span>
                                            <animated.span className="progress pl-[1rem] font-primaryFont font-semibold text-[1rem] text-[#fff] inline-flex items-center bg-[#2196f3] dark:bg-[#1565c0] duration-1000 linear" style={nextjs}>
                                                Next.js
                                            </animated.span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </animated.div>
            </main>
        </Layout>
    )
}
export default Page;