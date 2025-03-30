import BreadCrumb from "@import/components/breadcrumb";
import Layout from "@import/components/layout";
import ProjectDetail from "@import/routes/project-details/projectDetail";
import ProjectList from "@import/routes/project-details/projectList";
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

const Page = () => {
    const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });
    const [selectedProject,setSelectedProject] = useState();
    const [mobileView,setMobileView] = useState(false);

    return (
        <Layout>
            <main className="bg-[#f4f5f7] dark:bg-[#101010] min-h-[calc(100vh-(4rem+5.313rem))] sm:min-h-[calc(100vh-(5rem+8.75rem))] mt-[4rem] pt-[1rem] pb-[2.5rem] sm:mt-[5rem] sm:pt-[2.5rem]">
                <div className="container">
                    <animated.div className="akhil-project-details duration-500 linear" style={fadeIn}>
                        <BreadCrumb title="PROJECT DETAILS" />
                        <div className="akhil-project-details--wrap flex flex-wrap gap-[1rem]">
                           <ProjectList setSelectedProject={setSelectedProject} setMobileView={setMobileView} mobileView={mobileView}/>
                           <ProjectDetail selectedProject={selectedProject} setMobileView={setMobileView} mobileView={mobileView}/>
                        </div>
                    </animated.div>
                </div>
            </main>
        </Layout>
    )
}
export default Page;