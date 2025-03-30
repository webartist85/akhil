import { useState, useEffect } from 'react';
import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeContext } from '../context/ThemeContext';
const Header = ({ }) => {
    const { theme, setTheme } = useContext(ThemeContext);
    const switchTheme = () => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }
    return (
        <header className={`akhil-header bg-[#fff] h-[4rem] sm:h-[5rem] font-primaryFont fixed top-[0] left-[0] right-[0] bottom-[auto] z-50 w-full dark:bg-[#101010]`}>
            <div className="container h-full">
                <div className="akhil-header--inner h-full flex flex-wrap items-center justify-between">
                    <div className="akhil-header--logo-brand">
                        <Link href="/" className="text-[#333] dark:text-white font-secondaryFont text-[2rem] sm:text-[2.5rem]">akhil</Link>
                    </div>
                    <div className="akhil-header--actions flex flex-wrap items-center gap-[0.75rem] sm:gap-[0.938rem]">
                        <button
                            onClick={switchTheme}
                            className="akhil-header--theme-toggler text-[0.875rem] 
                font-semibold w-[38px] h-[38px] bg-white border dark:border-0 border-[#e5e5e5] text-[#101010] 
                relative rounded-3xl dark:bg-[#333]
                dark:text-white sm:dark:pr-[0.375rem] sm:pl-[0.375rem] sm:pr-[1rem] 
                flex flex-wrap items-center justify-center sm:justify-normal sm:dark:pl-[1rem] sm:h-[45px] sm:w-[150px]">
                            {
                                theme == "dark" ?
                                    <span className="hidden sm:inline-block w-full text-left">Dark Mode</span> :
                                    <span className="hidden sm:inline-block w-full text-right">Light Mode</span>
                            }
                            <span className="toggle-switch inline-block rounded-full 
                w-[35px] h-[35px] flex flex-wrap items-center 
                justify-center sm:shadow-1 sm:absolute transition-all duration-500 ease-in-out  
                bg-[#2196F3] dark:bg-[#1b1919] dark:right-[6px] sm:right-[110px]">
                                {
                                    theme == "dark" ?
                                        <Image
                                            src="/images/header/theme-dark.png"
                                            width={25}
                                            height={25}
                                            alt="theme-dark"
                                            quality={100}
                                            unoptimized
                                        /> : <Image
                                            src="/images/header/theme-light.png"
                                            width={25}
                                            height={25}
                                            alt="theme-dark"
                                            quality={100}
                                            unoptimized
                                        />
                                }
                            </span>
                        </button>
                        <a href="/images/header/my-cv.pdf" download>
                            <button className="akhil-header--download-v bg-[#2962ff] hover:bg-[#0D6EFD] dark:bg-[#0D6EFD] text-white text-[0.875rem] 
              font-semibold rounded-[0.5rem] sm:rounded-3xl w-[auto] h-[35px] sm:h-[45px] pl-[0.75rem] pr-[0.75rem]
              sm:pl-[1rem] sm:pr-[1rem] flex flex-wrap 
              items-center justify-center sm:justify-normal gap-[0.938rem] dark:hover:bg-[#2962FF]">
                                <span className="hidden sm:inline-block title">Download CV</span>
                                <span className="sm:hidden inline-block title">RESUME</span>
                                <span className="icon">
                                    <Image
                                        src="/images/header/download.svg"
                                        width={20}
                                        height={20}
                                        alt="download"
                                        quality={100}
                                        unoptimized
                                    />
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;