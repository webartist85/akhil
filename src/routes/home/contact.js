import Image from 'next/image';
import Link from 'next/link';
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Contact = () => {
  const [socialMedia, setShowMedia] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="akhil-home--contact w-full basis-full md:basis-[calc(50%-1rem/2)] lg:basis-[calc(30%-1rem*2/3)] xl:basis-[calc(25%-1rem*2/3)] overflow-hidden bg-white dark:bg-[#1B1919] shadow-2 dark:shadow-[0] border border-[#eaebf0] dark:border-[#403D3D] rounded-[1.25rem] relative cursor-pointer">
      <div className="akhil-home--contact--inner p-[0.938rem] pb-[2rem]" onClick={() => setShowMedia(true)}>
        <div className="image-wrapper text-center mb-[1.5rem]">
          <Image
            className="inline-block w-full"
            src={theme === "dark" ? "/images/home/contact.png" : "/images/home/light/contact.png"}
            width={237}
            height={150}
            alt="projects"
            quality={100}
            unoptimized
          />
        </div>
        <div className="content-wrapper pl-[0.625rem] pr-[0.937rem]">
          <div className="title">
            <h4 className="title-sm font-primaryFont font-semibold text-[0.875rem] text-[#2196f3] dark:text-[#00E5FF] mb-[0.5rem]">CONTACT</h4>
            <div className="title-lg font-primaryFont font-semibold text-[1.25rem] text-[#333] dark:text-white relative">
              Stay Connected
              <span className="navigator text-right absolute right-[-5px] sm:right-[-10px] top-[50%] translate-y-[-50%] cursor-pointer">
                <Image
                  className="inline-block w-[32px]"
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
      <div className={`akhil-home--social-media bg-white dark:bg-[#1B1919] rounded-[1.25rem] w-full h-full absolute ${!socialMedia ? 'top-[-100%]' : 'top-0'} bottom-auto left-0 right-0  flex flex-col items-center justify-center duration-500 ease-in-out`}>
        <span className="close absolute top-[1.25rem] right-[1.25rem] cursor-pointer" onClick={() => setShowMedia(false)}>
          <IoMdClose size={30} color={theme === "dark" ? "#fff" : "#333"} />
        </span>
        <div className="title text-center font-primaryFont font-semibold text-[1rem] text-[#333] dark:text-[#FFFFFF] mb-[1.563rem]">CONNECT WITH ME</div>
        <div className="icons flex flex-wrap items-center justify-center gap-[0.5rem]">
          <Link className="linked-in duration-500 ease-in-out hover:rotate-[360deg]" href="https://www.linkedin.com/in/akhiljayasree/" target="_blank">
            <Image
              src={theme === "dark" ? "/images/home/linked-in.png" : "/images/home/light/linked-in.png"}
              width={40}
              height={40}
              alt="linkedin"
              quality={100}
              unoptimized
            />
          </Link>
          <Link className="medium duration-500 ease-in-out hover:rotate-[360deg]" href="https://medium.com/@akhilj64" target="_blank">
            <Image
              src={theme === "dark" ? "/images/home/medium.png" : "/images/home/light/medium.png"}
              width={40}
              height={40}
              alt="medium"
              quality={100}
              unoptimized
            />
          </Link>
          <Link className="gmail duration-500 ease-in-out hover:rotate-[360deg]" href="mailto:akhilj64@gmail.com" title="akhilj64@gmail.com">
            <Image
              src={theme === "dark" ? "/images/home/gmail.png" : "/images/home/light/gmail.png"}
              width={40}
              height={40}
              alt="gmail"
              quality={100}
              unoptimized
            />
          </Link>
          <Link className="instagram duration-500 ease-in-out hover:rotate-[360deg]" href="https://www.instagram.com/akhilj2.0" target="_blank">
            <Image
              src={theme === "dark" ? "/images/home/instagram.png" : "/images/home/light/instagram.png"}
              width={40}
              height={40}
              alt="instagram"
              quality={100}
              unoptimized
            />
          </Link>
          <Link className="whatsapp duration-500 ease-in-out hover:rotate-[360deg]" href="tel:+91 8891428750">
            <Image
              src={theme === "dark" ? "/images/home/whatsapp.png" : "/images/home/light/whatsapp.png"}
              width={40}
              height={40}
              alt="whatsapp"
              quality={100}
              unoptimized
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Contact;