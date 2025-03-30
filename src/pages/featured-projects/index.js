import BreadCrumb from "@import/components/breadcrumb";
import Layout from "@import/components/layout";
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FiArrowRightCircle } from "react-icons/fi";
import Link from 'next/link'

const Page = () => {
    const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });
    const { theme } = useContext(ThemeContext);
    return (
        <Layout>
            <main className="bg-[#f4f5f7] dark:bg-[#101010] min-h-[calc(100vh-(4rem+5.313rem))] sm:min-h-[calc(100vh-(5rem+8.75rem))] mt-[4rem] pt-[1rem] pb-[2.5rem] sm:mt-[5rem] sm:pt-[2.5rem]">
                <animated.div className={"duration-500 linear"} style={fadeIn}>
                    <div className="container">
                        <BreadCrumb title="FEATURED PROJECTS" />
                        <div className="akhil-portfolio bg-white dark:bg-[#1B1919] shadow-2 dark:shadow-[0] border border-[#eaebf0] dark:border-[#403D3D] rounded-[0.5rem] md:rounded-[1.25rem] p-[1.25rem] pt-[2rem] xs:p-[2.188rem] xs:pb-[3rem]">
                            <div className="akhil-portfolio--title mb-[2rem] lg:mb-[3.125rem]">
                                <h1 className="font-primaryFont font-medium text-[2rem]/[2.25rem] xs:text-[2.25rem]/[2.5rem] text-[#333] dark:text-[#fff]">
                                    <span className="text-[#2196f3]">Featured</span>{" "}Projects
                                </h1>
                            </div>
                            <div className="akhil-portfolio--grid flex flex-wrap gap-[1.25rem]">
                                <div className="akhil-portfolio--grid--item w-full md:basis-[calc(50%-1.25rem/2)] lg:basis-[calc(33.33%-1.25rem*2/3)] border-2 border-[#e5e5e5e] dark:border-[#333] rounded-[0.938rem] cursor-pointer group" onClick={()=>window.open("https://www.buddiz.ai/", "_blank")}>
                                    <div className="akhil-portfolio--grid--image p-[0.75rem]">
                                        <Image
                                            className="w-full h-auto group-hover:opacity-[] transition-transform duration-500 ease-in-out"
                                            src={theme==="dark" ? "/images/portfolio/buddiz.png":"/images/portfolio/light/buddiz.png"}
                                            width={978}
                                            height={476}
                                            alt="buddiz"
                                            quality={100}
                                            unoptimized
                                        />
                                    </div>
                                    <div className="akhil-portfolio--grid--title font-primaryFont font-semibold dark:font-medium text-[1rem]/[1.25rem] pl-[1.25rem] pr-[1.25rem] pb-[0.875rem] flex flex-wrap items-center justify-between">
                                        <div className="title-wrap inline-flex gap-1">
                                            <span className="project-name text-[#333] dark:text-[#fff]">Buddiz -</span>
                                            <span className="category text-[#2196f3] dark:text-[#00E5FF]">Educational</span>
                                        </div>
                                        <Link href="https://www.buddiz.ai/" target="_blank">
                                            <FiArrowRightCircle size="24px" color={theme==="dark" ? "#fff":"#333"}/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="akhil-portfolio--grid--item w-full basis-full md:basis-[calc(50%-1.25rem/2)] lg:basis-[calc(33.33%-1.25rem*2/3)] border-2 border-[#e5e5e5e] dark:border-[#333] rounded-[0.938rem] cursor-pointer" onClick={()=>window.open("https://www.locumdoc.io/", "_blank")}>
                                    <div className="akhil-portfolio--grid--image p-[0.75rem]">
                                        <Image
                                            className="w-full h-auto"
                                            src={theme==="dark" ? "/images/portfolio/locumdoc.png":"/images/portfolio/light/locumdoc.png"}
                                            width={978}
                                            height={476}
                                            alt="locumdoc"
                                            quality={100}
                                            unoptimized
                                        />
                                    </div>
                                    <div className="akhil-portfolio--grid--title font-primaryFont font-semibold dark:font-medium text-[1rem]/[1.25rem] pl-[1.25rem] pr-[1.25rem] pb-[0.875rem] flex flex-wrap items-center justify-between">
                                        <div className="title-wrap inline-flex gap-1">
                                            <span className="project-name text-[#333] dark:text-[#fff]">Locumdoc -</span>
                                            <span className="category text-[#2196f3] dark:text-[#00E5FF]">Medical</span>
                                        </div>
                                        <Link href="https://www.locumdoc.io/" target="_blank">
                                            <FiArrowRightCircle size="24px" color={theme==="dark" ? "#fff":"#333"}/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="akhil-portfolio--grid--item w-full basis-full md:basis-[calc(50%-1.25rem/2)] lg:basis-[calc(33.33%-1.25rem*2/3)] border-2 border-[#e5e5e5e] dark:border-[#333] rounded-[0.938rem] cursor-pointer" onClick={()=>window.open("https://www.moviebank.app/en-IN", "_blank")}>
                                    <div className="akhil-portfolio--grid--image p-[0.75rem]">
                                        <Image
                                            className="w-full h-auto"
                                            src={theme==="dark" ? "/images/portfolio/moviebank.png":"/images/portfolio/light/moviebank.png"}
                                            width={978}
                                            height={476}
                                            alt="moviebank"
                                            quality={100}
                                            unoptimized
                                        />
                                    </div>
                                    <div className="akhil-portfolio--grid--title font-primaryFont font-semibold dark:font-medium text-[1rem]/[1.25rem] pl-[1.25rem] pr-[1.25rem] pb-[0.875rem] flex flex-wrap items-center justify-between">
                                        <div className="title-wrap inline-flex gap-1">
                                            <span className="project-name text-[#333] dark:text-[#fff]">Movie Bank -</span>
                                            <span className="category text-[#2196f3] dark:text-[#00E5FF]">Film Industry</span>
                                        </div>
                                        <Link href="https://www.moviebank.app/en-IN" target="_blank">
                                            <FiArrowRightCircle size="24px" color={theme==="dark" ? "#fff":"#333"}/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="akhil-portfolio--grid--item w-full md:basis-[calc(50%-1.25rem/2)] lg:basis-[calc(33.33%-1.25rem*2/3)] border-2 border-[#e5e5e5e] dark:border-[#333] rounded-[0.938rem] cursor-pointer" onClick={()=>window.open("https://www.mindhelpa.com/", "_blank")}>
                                    <div className="akhil-portfolio--grid--image p-[0.75rem]">
                                        <Image
                                            className="w-full h-auto"
                                            src={theme==="dark" ? "/images/portfolio/mindhelpa.png":"/images/portfolio/light/mindhelpa.png"}
                                            width={978}
                                            height={476}
                                            alt="mindhelpa"
                                            quality={100}
                                            unoptimized
                                        />
                                    </div>
                                    <div className="akhil-portfolio--grid--title font-primaryFont font-semibold dark:font-medium text-[1rem]/[1.25rem] pl-[1.25rem] pr-[1.25rem] pb-[0.875rem] flex flex-wrap items-center justify-between">
                                        <div className="title-wrap inline-flex gap-1">
                                            <span className="project-name text-[#333] dark:text-[#fff]">Mindhelpa -</span>
                                            <span className="category text-[#2196f3] dark:text-[#00E5FF]">Healthcare</span>
                                        </div>
                                        <Link href="https://www.mindhelpa.com/" target="_blank">
                                            <FiArrowRightCircle size="24px" color={theme==="dark" ? "#fff":"#333"}/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="akhil-portfolio--grid--item w-full md:basis-[calc(50%-1.25rem/2)] lg:basis-[calc(33.33%-1.25rem*2/3)] border-2 border-[#e5e5e5e] dark:border-[#333] rounded-[0.938rem] cursor-pointer" onClick={()=>window.open("https://safqat.com/en", "_blank")}>
                                    <div className="akhil-portfolio--grid--image p-[0.75rem]">
                                        <Image
                                            className="w-full h-auto"
                                            src={theme==="dark" ? "/images/portfolio/safqat.png":"/images/portfolio/light/safqat.png"}
                                            width={978}
                                            height={476}
                                            alt="safqat"
                                            quality={100}
                                            unoptimized
                                        />
                                    </div>
                                    <div className="akhil-portfolio--grid--title font-primaryFont font-semibold dark:font-medium text-[1rem]/[1.25rem] pl-[1.25rem] pr-[1.25rem] pb-[0.875rem] flex flex-wrap items-center justify-between">
                                        <div className="title-wrap inline-flex gap-1">
                                            <span className="project-name text-[#333] dark:text-[#fff]">Safqat -</span>
                                            <span className="category text-[#2196f3] dark:text-[#00E5FF]">Ecommerce</span>
                                        </div>
                                        <Link href="https://safqat.com/en" target="_blank">
                                            <FiArrowRightCircle size="24px" color={theme==="dark" ? "#fff":"#333"}/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="akhil-portfolio--grid--item w-full md:basis-[calc(50%-1.25rem/2)] lg:basis-[calc(33.33%-1.25rem*2/3)] border-2 border-[#e5e5e5e] dark:border-[#333] rounded-[0.938rem]" onClick={()=>window.open("https://www.mfw4a.org/news-events", "_blank")}>
                                    <div className="akhil-portfolio--grid--image p-[0.75rem]">
                                        <Image
                                            className="w-full h-auto"
                                            src={theme==="dark" ? "/images/portfolio/mfw4a.png":"/images/portfolio/light/mfw4a.png"}
                                            width={978}
                                            height={476}
                                            alt="mfw4a"
                                            quality={100}
                                            unoptimized
                                        />
                                    </div>
                                    <div className="akhil-portfolio--grid--title font-primaryFont font-semibold dark:font-medium text-[1rem]/[1.25rem] pl-[1.25rem] pr-[1.25rem] pb-[0.875rem] flex flex-wrap items-center justify-between">
                                        <div className="title-wrap inline-flex gap-1">
                                            <span className="project-name text-[#333] dark:text-[#fff]">MFW4A -</span>
                                            <span className="category text-[#2196f3] dark:text-[#00E5FF]">Finance</span>
                                        </div>
                                        <Link href="https://www.mfw4a.org/news-events" target="_blank">
                                            <FiArrowRightCircle size="24px" color={theme==="dark" ? "#fff":"#333"}/>
                                        </Link>
                                    </div>
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