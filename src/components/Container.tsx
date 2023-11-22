import { FunctionComponent } from "react";
import AdvantagesCard from "./AdvantagesCard";
import ProgramsContainer from "./ProgramsContainer";

const Container: FunctionComponent = () => {
  return (
    <div className="absolute top-[1308px] left-[118px] w-[1637px] h-[382px] text-left text-lg text-black font-poppins">
      <b className="absolute top-[calc(50%_-_191px)] left-[calc(50%_-_818.5px)] text-81xl inline-block font-montserrat-alternates w-[805px] [-webkit-text-stroke:6px_#536171] opacity-[0.1]">
        WHY GURUKRIPA?
      </b>
      <div className="absolute top-[317px] left-[0px] text-base leading-[30px]">
        Where Individual Growth Meets Excellence in Education
      </div>
      <b className="absolute top-[207px] left-[0px] text-21xl leading-[50px] inline-block w-[660px]">
        Where Individual Growth Meets Excellence in Education
      </b>
      <AdvantagesCard
        imageId="/phgraduationcapbold.svg"
        componentTitle="Advantages for a Rewarding Career"
        careerGuidanceText="Unlock a world of opportunities with Gurukripa's guidance, ensuring a fulfilling career."
      />
      <AdvantagesCard
        imageId="/phchalkboardteacher.svg"
        componentTitle="Experienced Faculty"
        careerGuidanceText="Learn from the best—our highly experienced faculty will shape your future."
        propTop="237px"
        propBackgroundColor="unset"
      />
      <ProgramsContainer
        programImageUrl="/lucidetrophy.svg"
        programDescription="Top Programs"
        programBenefits="Join our prestigious programs to become a successful doctor, engineer, or more."
      />
      <ProgramsContainer
        programImageUrl="/claritybuildingline.svg"
        programDescription="Excellent Infrastructure"
        programBenefits="Study in a world-class environment with top-notch facilities at your disposal."
        propTop="233px"
      />
      <div className="absolute top-[215.5px] left-[873.5px] box-border w-[101px] h-px opacity-[0.5] border-t-[1px] border-solid border-gray" />
      <div className="absolute top-[211.5px] left-[1301.5px] box-border w-[101px] h-px opacity-[0.5] border-t-[1px] border-solid border-gray" />
    </div>
  );
};

export default Container;
