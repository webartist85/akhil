import { Drawer } from 'antd';
import Image from 'next/image';
import { IoMdClose } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Link from 'next/link';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const TimeLine = ({ open, close }) => {
    const { theme } = useContext(ThemeContext);

    const workHistoryData = [
        {
            id: 0,
            logo: `${theme === "dark" ? "/images/work-history/buddiz.png":"/images/work-history/light/buddiz.png"}`,
            company: "Buddiz AI",
            designation: "Lead UI Developer",
            date: "March 2024 - Present",
            time: "6 mos",
            website: "www.buddiz.ai",
            location: "KOCHI - INDIA"
        },
        {
            id: 1,
            logo: `${theme === "dark" ? "/images/work-history/3stops.png":"/images/work-history/light/3stops.png"}`,
            company: "Threestops Technologies",
            designation: "Lead UI Developer",
            date: "Dec 2022 - Feb 2024",
            time: "1 year 3 mos",
            designation2: "Senior UI Developer",
            date2: "Dec 2020 - March 2022",
            time2: "1year 4 mos",
            website: "www.threestops.app",
            location: "KOCHI - INDIA"
        },
        {
            id: 2,
            logo: `${theme === "dark" ? "/images/work-history/eqs.png":"/images/work-history/light/eqs.png"}`,
            company: "EQS Group",
            designation: "Associate Software Engineer",
            date: "March 2022 - Dec 2022",
            time: "10 mos",
            website: "www.eqs.com",
            location: "KOCHI - INDIA"
        },
        {
            id: 3,
            logo: `${theme === "dark" ? "/images/work-history/assyst.png":"/images/work-history/light/assyst.png"}`,
            company: "Assyst International",
            designation: "Software Engineer (UI)",
            date: "Jul 2018 - Dec 2020",
            time: "2yrs 6mos",
            website: "www.assyst.net",
            location: "KOCHI - INDIA"
        },
        {
            id: 4,
            logo: `${theme === "dark" ? "/images/work-history/mindmax.png":"/images/work-history/light/mindmax.png"}`,
            company: "Mindmax Software Solutions",
            designation: "Software Engineer (UI)",
            date: "Nov 2016 - Jul 2018",
            time: "1 yr 8 mos",
            website: "www.mindmax.us",
            location: "KOCHI - INDIA"
        }
    ]
    return (
        <Drawer className={`akhil-work-timeline dark:!bg-[#1b1919] border border-[#f2f2f2] dark:border-[#403d3d] xs:rounded-l-[1rem] ${theme}`}
            title={<><h4 className="font-primaryFont font-semibold dark:font-medium text-[#000] dark:text-[#fff] text-[1rem] flex flex-wrap items-center gap-[0.75rem]">
                <span>
                    <Image
                        src="/images/home/timeline.png"
                        width={35}
                        height={35}
                        alt="timeline"
                        quality={100}
                        unoptimized
                    /></span>
                WORK HISTORY
            </h4>
                <span className="close cursor-pointer" onClick={() => close()}>
                    <IoMdClose size={25} color={theme === "dark" ? "#fff":"#333"} />
                </span>
            </>
            }
            open={open}
            onClose={close}>
            {
                workHistoryData.map((item) => {
                    return (
                        <div key={item.id} className="akhil-work-timeline--item border-b-2 border-dashed border-[#e5e5e5] dark:border-[#343434] pb-[1rem] mb-[1.5rem] flex flex-wrap items-start gap-[1.25rem]">
                            <div className="image-wrapper">
                                <Image
                                    src={item.logo}
                                    width={50}
                                    height={50}
                                    alt="3stops"
                                    quality={100}
                                    unoptimized
                                />
                            </div>
                            <div className="content-wrapper">
                                <div className="company-name font-primaryFont font-semibold text-[1rem]/[1.25rem] text-[#000] dark:text-[#fff] mb-[0.5rem]">{item.company}</div>
                                <div className="designation font-primaryFont font-semibold text-[0.875rem]/[1.25rem] text-[#2196f3] dark:text-[#00e5ff] mb-[0.5rem]">{item.designation}</div>
                                <div className="time-line flex flex-wrap items-center gap-3 mb-[0.5rem]">
                                    <span className="date font-primaryFont font-medium text-[0.813rem]/[1rem] text-[#333] dark:text-[#f2f2f2]">{item.date}</span>
                                    <span className="years font-primaryFont font-semibold text-[0.813rem]/[1rem] text-[#808080] dark:text-[#BDBDBD]">{item.time}</span>
                                </div>
                                {
                                    item.designation2 &&
                                    <>
                                        <div className="designation font-primaryFont font-semibold text-[0.875rem]/[1.25rem] text-[#2196f3] dark:text-[#00e5ff] mt-[0.75rem] mb-[0.5rem]">{item.designation2}</div>
                                        <div className="time-line flex flex-wrap items-center gap-3 mb-[0.75rem]">
                                            <span className="date font-primaryFont font-medium text-[0.813rem]/[1rem] text-[#333] dark:text-[#f2f2f2]">{item.date2}</span>
                                            <span className="years font-primaryFont font-semibold text-[0.813rem]/[1rem] text-[#808080] dark:text-[#BDBDBD]">{item.time2}</span>
                                        </div>
                                    </>
                                }
                                <div className="website mb-[0.75rem]">
                                    <Link className="font-primaryFont font-medium text-[0.875rem]/[1rem] text-[#2196f3]" href={"https://"+item.website} target="_blank">{item.website}</Link>
                                </div>
                                <div className="location font-primaryFont font-semibold dark:font-medium text-[0.75rem]/[1rem] text-[#333] dark:text-[#fff] flex flex-wrap items-center gap-2 mb-[1rem]">
                                    <IoLocationSharp size="16" color={theme==="dark" ? "#fff":"#333"} />
                                    {item.location}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Drawer>
    )
}
export default TimeLine;