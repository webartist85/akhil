import About from './about';
import Quotes from './quotes';
import ProjectDetails from './projectDetails';
import WorkHistory from './workHistory';
import Portfolio from './portfolio';
import SkillSets from './skillSets';
import Contact from './contact';
import { useSpring, animated } from '@react-spring/web';

const Home = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }});
 
  return (
    <animated.section className={"duration-500 linear akhil-home"} style={fadeIn}>
      <div className="container">
        <div className="akhil-home--grid flex flex-wrap gap-[1rem]">
          <About/>
          <div className="akhil-home--grid--multi w-full basis-full lg:basis-[calc(50%-1rem/2)] flex flex-wrap gap-[1rem]">
            <Quotes />
            <ProjectDetails/>
            <WorkHistory/>
          </div>
          <Portfolio/>
          <SkillSets />
          <Contact />
        </div>
      </div>
    </animated.section>
  )
}
export default Home;