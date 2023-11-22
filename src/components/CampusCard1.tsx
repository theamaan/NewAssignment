import { FunctionComponent } from "react";
import Property1Frame18 from "./Property1Frame18";

const CampusCard1: FunctionComponent = () => {
  return (
    <div className="absolute top-[3013px] left-[119px] w-[1680px] h-[910px] text-left text-5xl text-darkorange font-poppins">
      <div className="absolute top-[510px] left-[856px] w-[824px] h-[400px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-xl w-[824px] h-[400px] object-cover"
          alt=""
          src="/rectangle-15@2x.png"
        />
        <b className="absolute top-[241px] left-[calc(50%_-_372px)]">
          State of the Art Library
        </b>
        <div className="absolute top-[282px] left-[calc(50%_-_372px)] text-base leading-[22px] text-white inline-block w-[688px]">
          Our library offers over 5000 books, including latest
          physics,chemistry,zoology, botany, and mathematics, as well as
          autobiographies. It provides a quiet, purposeful atmosphere for study
          and intellectual creativity, equipped with digital technology and
          e-book resources.
        </div>
      </div>
      <b className="absolute top-[0px] left-[calc(50%_-_840px)] text-21xl leading-[50px] text-black">
        Our Inspiring Campus: Your Gateway to Excellence
      </b>
      <Property1Frame18
        property1Frame18Position="absolute"
        property1Frame18Top="80px"
        property1Frame18Left="calc(50% - 840px)"
      />
      <div className="absolute top-[510px] left-[1px] w-[824px] h-[400px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-xl w-[824px] h-[400px] object-cover"
          alt=""
          src="/rectangle-14@2x.png"
        />
        <b className="absolute top-[263px] left-[calc(50%_-_372px)]">
          Computer Lab
        </b>
        <div className="absolute top-[304px] left-[calc(50%_-_372px)] text-base leading-[22px] text-white inline-block w-[645px]">
          Gurukripa Career Institute offers an ultra-modern computer laboratory
          with 500 computers, offering skipped lectures and online weekly tests
          for engineering and medical entrance exams.
        </div>
      </div>
      <div className="absolute top-[2px] left-[calc(50%_+_612px)] [text-decoration:underline] text-darkgreen">
        Explore Our Gallery
      </div>
    </div>
  );
};

export default CampusCard1;
