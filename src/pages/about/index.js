import BreadCrumb from "@import/components/breadcrumb";
import Layout from "@import/components/layout";
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Page = () => {
    const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });
    const { theme } = useContext(ThemeContext);

    return (
        <Layout>
            <main className="bg-[#f4f5f7] dark:bg-[#101010] min-h-[calc(100vh-(4rem+5.313rem))] sm:min-h-[calc(100vh-(5rem+8.75rem))] mt-[4rem] pt-[1rem] pb-[2.5rem] sm:mt-[5rem] sm:pt-[2.5rem]">
                <animated.div className={"duration-500 linear"} style={fadeIn}>
                    <div className="container">
                        <BreadCrumb title="ABOUT ME" />
                        <div className="akhil-about bg-[#fff] dark:bg-[#1B1919] shadow-2 dark:shadow-[0] border border-[#eaebf0] dark:border-[#403D3D] p-[1.25rem] xs:p-[3.125rem] rounded-[0.5rem] md:rounded-[1.25rem]">
                            <div className="akhil-about--header flex flex-wrap items-center gap-[1.5rem] mb-[2.5rem] xs:mb-[3.125rem]">
                                <div className="image-wrapper">
                                    <Image
                                        className="profile-image rounded-[5px] w-[60px] h-[60px] xs:w-[80px] xs:h-[80px]"
                                        src={theme==="dark"?"/images/home/profile-image.png":"/images/home/light/profile-image.png"}
                                        alt="profile-image"
                                        width={80}
                                        height={80}
                                        quality={100}
                                        unoptimized
                                    />
                                </div>
                                <div className="title">
                                    <h1 className="font-primaryFont font-medium text-[2rem]/[2.25rem] xs:text-[2.25rem]/[2.5rem] text-[#333] dark:text-[#fff]"><span className="text-[#2196f3]">About</span> Me</h1>
                                </div>
                            </div>
                            <div className="akhil-about--title font-primaryFont font-semibold dark:font-medium text-[1rem]/[1.5rem] text-[#333] dark:text-[#f2f2f2] mb-[1.875rem]">
                                {"HI, I'M AKHIL JAYASREE,"}
                            </div>
                            <div className="akhil-about--description font-primaryFont font-medium dark:font-normal text-[1rem]/[1.5rem] text-[#333] dark:text-[#969090] mb-[1.25rem]">
                                <p className="mb-[1.563rem]">
                                    A passionate UI/UX designer and front-end UI developer with over 6 years of professional experience in crafting engaging and user-centric web experiences. My journey in the tech industry has allowed me to wear multiple hats, from web development to design, giving me a holistic understanding of the digital landscape.
                                </p>
                                <p className="mb-[1.563rem]">
                                    My expertise lies in transforming creative concepts into interactive and visually appealing websites, ensuring seamless user experiences. I thrive on the challenge of merging design and code to bring ideas to life. With a deep commitment to user-centered design, I take pride in building interfaces that not only look stunning but also function flawlessly. Throughout my career, I have had the privilege of collaborating with diverse teams and clients to create innovative digital solutions. My passion for staying up-to-date with emerging web technologies keeps me at the forefront of the ever-evolving digital world. I am driven by the belief that great design and development can have a profound impact, and I am excited to continue pushing the boundaries of what is possible in the digital realm.
                                </p>
                                <p className="mb-[1.563rem]">
                                    I want to express my heartfelt gratitude to the mentors, colleagues, and employers who have been instrumental in my professional growth. Their guidance, support, and the opportunities they have provided have played a pivotal role in shaping my career. I look forward to continuing this journey of learning, creativity, and innovation, and I am excited to see where the future of web development and design takes us.
                                </p>
                            </div>
                        </div>
                    </div>
                </animated.div>
            </main>
        </Layout>
    )
}
export default Page;