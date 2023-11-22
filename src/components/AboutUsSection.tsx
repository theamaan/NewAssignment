import { FunctionComponent } from "react";

const AboutUsSection: FunctionComponent = () => {
  return (
    <div className="absolute top-[27px] left-[calc(50%_-_913px)] rounded-xl bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] w-[1823px] h-[120px] overflow-hidden text-left text-xl text-black font-montserrat">
      <img
        className="absolute top-[29px] left-[31px] rounded-xl w-[181.7px] h-[72px] object-cover"
        alt=""
        src="/image-2@2x.png"
      />
      <div className="absolute top-[48px] left-[calc(50%_-_236.5px)] flex flex-row items-start justify-start gap-[30px]">
        <b className="relative">About Us</b>
        <div className="relative">Our System</div>
        <div className="relative">Our Programs</div>
        <div className="relative">E - Learning</div>
        <div className="relative">Academics</div>
        <div className="relative">Student Portal</div>
      </div>
      <div className="absolute top-[calc(50%_-_30px)] left-[1591px] w-[187px] h-[60px] text-white">
        <div className="absolute top-[calc(50%_-_30px)] left-[0px] rounded-xl bg-cornflowerblue-100 w-[187px] h-[60px]" />
        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_68.5px)] inline-block w-[132px]">
          Enquire Now
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
