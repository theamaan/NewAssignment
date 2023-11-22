import { FunctionComponent } from "react";
import AboutUsSection from "../components/AboutUsSection";
import Container from "../components/Container";
import HeartbeatContainer from "../components/HeartbeatContainer";
import Container1 from "../components/Container1";
import CampusCard1 from "../components/CampusCard1";
import ReachUsFormContainer1 from "../components/ReachUsFormContainer1";
import SocialMediaSection1 from "../components/SocialMediaSection1";

const AboutUs: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[5888px] overflow-hidden text-center text-[48px] text-black font-poppins">
      <div className="absolute top-[992px] left-[247px] rounded-xl bg-oldlace w-[1453px] h-[266px]" />
      <AboutUsSection />
      <b className="absolute top-[227px] left-[calc(50%_-_662px)] inline-block w-[1320px]">
        Empowering Dreams, Shaping Futures
      </b>
      <div className="absolute top-[314px] left-[calc(50%_-_394px)] text-11xl leading-[44px] font-extralight inline-block w-[784px]">
        Your Path to Success Begins Here with Gurukripa Career Institute
      </div>
      <img
        className="absolute top-[432px] left-[0px] rounded-xl w-[400px] h-[250px] object-cover"
        alt=""
        src="/rectangle-2@2x.png"
      />
      <img
        className="absolute top-[432px] left-[346px] rounded-xl w-[817px] h-[310px] object-cover"
        alt=""
        src="/rectangle-4@2x.png"
      />
      <img
        className="absolute top-[432px] left-[1183px] rounded-xl w-[350px] h-[250px] object-cover"
        alt=""
        src="/rectangle-6@2x.png"
      />
      <img
        className="absolute top-[432px] left-[1553px] rounded-xl w-[440px] h-[250px] object-cover"
        alt=""
        src="/rectangle-8@2x.png"
      />
      <img
        className="absolute top-[702px] left-[1183px] rounded-xl w-[350px] h-[250px] object-cover"
        alt=""
        src="/rectangle-7@2x.png"
      />
      <img
        className="absolute top-[702px] left-[1553px] rounded-xl w-[440px] h-[250px] object-cover"
        alt=""
        src="/rectangle-9@2x.png"
      />
      <img
        className="absolute top-[757px] left-[346px] rounded-xl w-[817px] h-[195px] object-cover"
        alt=""
        src="/rectangle-5@2x.png"
      />
      <img
        className="absolute top-[702px] left-[0px] rounded-xl w-[400px] h-[250px] object-cover"
        alt=""
        src="/rectangle-2@2x.png"
      />
      <div className="absolute top-[1035px] left-[412px] text-base leading-[30px] inline-block w-[1122px]">
        Gurukripa, established in 2007, has been a leading coaching institute
        for 15 years, focusing on providing exceptional coaching and top results
        in Engineering and Medical entrance exams. The institute is known for
        its academic system, stable faculties, study material, and superior
        technology-aided teaching methodology. It offers video lectures, digital
        learning, online mock tests, and comprehensive assessment solutions.
        Gurukripa believes in nurturing potential through quality education,
        modern teaching methods, and a competitive environment. The institute
        provides systematic academic study material, personalized attention
        through mentoring programs, and activities like individual counseling
        and motivational seminars to help students manage exam pressure and time
        management.
      </div>
      <img
        className="absolute top-[1087px] left-[1577px] w-[82.9px] h-[76px] object-cover"
        alt=""
        src="/mask-group@2x.png"
      />
      <img
        className="absolute top-[1087.5px] left-[286.5px] w-[87px] h-[73.5px]"
        alt=""
        src="/group-36.svg"
      />
      <Container />
      <div className="absolute top-[1298px] left-[calc(50%_-_602px)] w-[1200px] h-0" />
      <div className="absolute top-[1730px] left-[calc(50%_-_602px)] w-[1200px] h-0" />
      <div className="absolute top-[2379px] left-[calc(50%_-_552px)] w-[1200px] h-0" />
      <HeartbeatContainer />
      <Container1 />
      <div className="absolute top-[2788px] left-[1406px] w-[63px] h-[63px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[63px] h-[63px] object-cover"
          alt=""
          src="/workwriting@2x.png"
        />
      </div>
      <CampusCard1 />
      <ReachUsFormContainer1 />
      <SocialMediaSection1 />
    </div>
  );
};

export default AboutUs;
