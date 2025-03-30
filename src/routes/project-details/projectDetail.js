import HttpStudio from './httpStudio';
import Buddiz from './buddiz';
import Locumdoc from './locumdoc';
import MindHelpa from './mindHelpa';
import MovieBank from './movieBank';
import Safqat from './safqat';
import MakingFinance from './makingFinance';
import { IoArrowBackSharp } from "react-icons/io5";
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ProjectDetail = ({ selectedProject,setMobileView,mobileView }) => {
    const { theme } = useContext(ThemeContext);
    const RenderContent = () => {
        switch (selectedProject) {
            case "Buddiz":
                return <Buddiz />
            case "Locumdoc":
                return <Locumdoc />
            case "Mindhelpa":
                return <MindHelpa />
            case "Movie Bank":
                return <MovieBank />
            case "Safqat":
                return <Safqat />
            case "Making Finance":
                return <MakingFinance />
            default:
                return <HttpStudio />
        }
    }

    return (
        <div className={`akhil-project-details--detail bg-[#fff] dark:bg-[#1B1919] shadow-2 dark:shadow-[0] border border-[#eaebf0] dark:border-[#403D3D] rounded-[0.5rem] md:rounded-[1.25rem] w-full md:w-[calc(100%-(250px+1rem))] lg:w-[calc(100%-(300px+1rem))] p-[1.25rem] pt-[2rem] xs:p-[2.188rem] md:block ${!mobileView? 'hidden':''} `}>
            <div className="title flex flex-wrap gap-3 items-center mb-[2rem] lg:mb-[3.125rem]">
                <span className="back-btn md:hidden" onClick={()=>setMobileView(false)}><IoArrowBackSharp color={theme==="dark" ? "#fff":"#333"} size={25} /></span>
                <h1 className="font-primaryFont font-medium text-[2rem]/[2.25rem] xs:text-[2.25rem]/[2.5rem] text-[#333] dark:text-[#fff]">
                    <span className="text-[#2196f3]">Project</span>{" "}Details
                </h1>
            </div>
            <div className="description font-medium text-[2rem]/[2.25rem] xs:text-[2.25rem]/[2.5rem] text-[#fff]">
                <RenderContent />
            </div>
        </div>
    )
}
export default ProjectDetail;