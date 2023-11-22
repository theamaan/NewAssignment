import { FunctionComponent } from "react";
import CardContainer from "./CardContainer";

const ReachUsFormContainer1: FunctionComponent = () => {
  return (
    <div className="absolute top-[4003px] left-[130px] w-[1660px] h-[1184px] text-left text-11xl text-black font-poppins">
      <b className="absolute top-[calc(50%_+_61px)] left-[calc(50%_-_124px)] text-31xl font-montserrat-alternates [-webkit-text-stroke:6px_#536171] opacity-[0.1]">
        Reach Us
      </b>
      <img
        className="absolute top-[0px] left-[1076px] w-[69.8px] h-[83px] object-cover"
        alt=""
        src="/image-12@2x.png"
      />
      <div className="absolute top-[182px] left-[16px] leading-[45px] inline-block w-[602px]">
        <b className="text-steelblue">Sikar,</b>
        <span>{` a historical city in `}</span>
        <b className="[background:linear-gradient(90deg,_#64a5eb,_#f27d15_56.25%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Rajasthan,
        </b>
        <span>
          {" "}
          is the administrative headquarters of the Sikar District and is
          situated between Agra and Bikaner, offering Mughal-era architecture.
          It is located 114 km from Jaipur, 320 km from Jodhpur 215 km from
          Bikaner, and 280 km from Delhi.
        </span>
      </div>
      <b className="absolute top-[12px] left-[calc(50%_-_225px)] text-21xl">
        <span>{`Discover Our `}</span>
        <span className="[background:linear-gradient(270deg,_#64a5eb_33.33%,_#f27d15_54.69%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Campus
        </span>
      </b>
      <img
        className="absolute top-[102px] left-[679px] w-[950px] h-[450px] object-cover"
        alt=""
        src="/mask-group1@2x.png"
      />
      <img
        className="absolute top-[72px] left-[7px] w-[110px] h-[110px] object-cover"
        alt=""
        src="/mask-group2@2x.png"
      />
      <img
        className="absolute top-[437px] left-[567px] w-[101.7px] h-[114.6px]"
        alt=""
        src="/group-40.svg"
      />
      <CardContainer
        prop="01"
        byRail="By Rail"
        sikarCityIsConnectedThrou="Sikar City is connected through a broad gauge line to Jhunjhunu, Rewari, Delhi, and Churu."
        iconParkSolidrailway="/iconparksolidrailway.svg"
      />
      <CardContainer
        prop="02"
        byRail="By Road"
        sikarCityIsConnectedThrou="Sikar is well connected by roads to major cities in Rajasthan and nearby states."
        iconParkSolidrailway="/mdiroad.svg"
        propLeft="580px"
        propLeft1="36px"
        propLeft2="36px"
      />
      <CardContainer
        prop="03"
        byRail="By Air"
        sikarCityIsConnectedThrou="Sikar City is connected through a broad gauge line to Jhunjhunu, Rewari, Delhi, and Churu."
        iconParkSolidrailway="/raphaelplane.svg"
        propLeft="1160px"
        propLeft1="45px"
        propLeft2="45px"
      />
      <img
        className="absolute h-[3.55%] w-[5.78%] top-[53.46%] right-[47.11%] bottom-[42.99%] left-[47.11%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-41.svg"
      />
      <div className="absolute top-[472px] left-[1549px] rounded-3xs bg-oldlace w-[60px] h-[60px] opacity-[0.8]" />
      <img
        className="absolute top-[482px] left-[1559px] w-10 h-10 overflow-hidden"
        alt=""
        src="/icsharpfullscreen.svg"
      />
    </div>
  );
};

export default ReachUsFormContainer1;
