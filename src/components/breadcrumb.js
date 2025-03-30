import Link from 'next/link';
import { IoMdHome } from "react-icons/io";
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const BreadCrumb = ({ title }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="akhil-breadcrumb bg-[#fff] dark:bg-[#101010] shadow-2 dark:shadow-[0] border border-[#eaebf0] dark:border-[#403D3D] inline-flex flex-wrap items-center gap-3 pl-[1.25rem] pr-[1.5rem] p-[0.75rem] mb-[1.25rem] md:mb-[2.188rem] rounded-[0.5rem]">
            <Link href="/">
                <IoMdHome size={20} color={theme==="dark"?"#fff":"#333"} />
            </Link>
            <div className="akhil-breadcrumb--title font-primaryFont font-medium text-[#333] dark:text-[#969090] text-[0.813rem]">
                /{" "}{title}
            </div>
        </div>
    )
}
export default BreadCrumb;