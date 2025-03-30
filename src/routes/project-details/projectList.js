import Image from 'next/image';
import { useState } from 'react';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ProjectList = ({setSelectedProject,setMobileView,mobileView}) => {
    const [activeProject,setActiveProject] = useState(1);
    const { theme } = useContext(ThemeContext);

    const projectData = [
        {
            id: 1,
            logo: `${theme === "dark" ? '/images/project-details/httpstudio.png':'/images/project-details/light/httpstudio.png'}`,
            projectName: "Http Studio"
        },
        {
            id: 2,
            logo: `${theme === "dark" ? '/images/project-details/buddiz.png':'/images/project-details/light/buddiz.png'}`,
            projectName: "Buddiz"
        },
        {
            id: 3,
            logo: `${theme === "dark" ? '/images/project-details/locumdoc.png':'/images/project-details/light/locumdoc.png'}`,
            projectName: "Locumdoc"
        },
        {
            id: 4,
            logo: `${theme === "dark" ? '/images/project-details/mindhelpa.png':'/images/project-details/light/mindhelpa.png'}`,
            projectName: "Mindhelpa"
        },
        {
            id: 5,
            logo: `${theme === "dark" ? '/images/project-details/moviebank.png':'/images/project-details/light/moviebank.png'}`,
            projectName: "Movie Bank"
        },
        {
            id: 6,
            logo: `${theme === "dark" ? '/images/project-details/safqat.png':'/images/project-details/light/safqat.png'}`,
            projectName: "Safqat"
        },
        {
            id: 7,
            logo: `${theme === "dark" ? '/images/project-details/finance.png':'/images/project-details/light/finance.png'}`,
            projectName: "Making Finance"
        }
    ]
    const handleProjectList = (id,name)=>{
        setActiveProject(id)
        setSelectedProject(name)
        setMobileView(true)
    }
    return (
        <div className={`akhil-project-details--sidebar bg-white dark:bg-[transparent] sm:dark:bg-[#1B1919] shadow-2 dark:shadow-[0] border border-[#eaebf0] dark:border-[#403D3D] rounded-[0.5rem] md:rounded-[1.25rem] w-full md:w-[250px] lg:w-[300px] p-[1.5rem] md:block ${mobileView? 'hidden':''}`}>
            <h4 className="title font-primaryFont font-semibold dark:font-medium text-[1.125rem]/[1.25rem] text-[#333] dark:text-[#fff] mb-[1.875rem]">PROJECTS</h4>
            <ul className="akhil-project-details--list">
                {
                    projectData.map((item) => {
                        return (
                            <li key={item.id} onClick={()=>handleProjectList(item.id,item.projectName)} className={`akhil-project-details--list--item bg-white dark:bg-[#101010] shadow-2 dark:shadow-[0] text-[#333] dark:text-[#fff] p-[0.625rem] pb-[0.625rem] border border-[#eaebf0] dark:border-[#403D3D] rounded-[0.5rem] flex flex-wrap items-center gap-[0.875rem] mb-[0.75rem] cursor-pointer ${activeProject === item.id ? 'md:border-2 md:border-[#2196f3] dark:md:border-[#ffffff]':''}`}>
                                <span className="logo">
                                    <Image
                                        src={item.logo}
                                        width={40}
                                        height={40}
                                        alt="httpstudio"
                                        quality={100}
                                        unoptimized
                                    />
                                </span>
                                <span className="font-primaryFont font-semibold dark:font-medium text-[1rem]/[1.25rem]">{item.projectName}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default ProjectList;