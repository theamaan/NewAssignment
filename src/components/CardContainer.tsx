import { FunctionComponent, useMemo, type CSSProperties } from "react";

type CardContainerType = {
  prop?: string;
  byRail?: string;
  sikarCityIsConnectedThrou?: string;
  theSikarJaipurTrackIsUnde?: string;
  the122KmLoharuSikarRailwa?: string;
  aBiWeeklyRailServiceBetwe?: string;
  iconParkSolidrailway?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
  propLeft2?: CSSProperties["left"];
};

const CardContainer: FunctionComponent<CardContainerType> = ({
  prop,
  byRail,
  sikarCityIsConnectedThrou,
  theSikarJaipurTrackIsUnde,
  the122KmLoharuSikarRailwa,
  aBiWeeklyRailServiceBetwe,
  iconParkSolidrailway,
  propLeft,
  propLeft1,
  propLeft2,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const byRailStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  return (
    <div
      className="absolute top-[734px] left-[0px] rounded-xl bg-white box-border w-[500px] h-[450px] overflow-hidden text-left text-11xl text-black font-princess-sofia border-[1px] border-solid border-steelblue"
      style={frameDiv2Style}
    >
      <div
        className="absolute top-[40px] left-[45px] leading-[45px]"
        style={divStyle}
      >
        {prop}
      </div>
      <b
        className="absolute top-[101px] left-[45px] font-poppins text-cornflowerblue-100"
        style={byRailStyle}
      >
        {byRail}
      </b>
      <div className="absolute top-[161px] left-[36px] text-inherit leading-[26px] font-inherit inline-block w-[440px]">
        <ul className="m-0 pl-[21px]">
          <li className="mb-0">{sikarCityIsConnectedThrou}</li>
          <li className="mb-0">
            The Sikar - Jaipur track is under construction, with a section of
            106 km already completed up to Jaipur.
          </li>
          <li className="mb-0">
            The 122 km Loharu-Sikar railway line in Rajasthan has been converted
            to broad gauge, and rail services to Sikar City are available.
          </li>
          <li>
            A bi-weekly rail service between Sikar and Delhi is in operation,
            inaugurated as the Sikar - Delhi Sarai Rohilla Express.
          </li>
        </ul>
      </div>
      <div className="absolute top-[30px] left-[380px] rounded-3xs bg-oldlace w-[90px] h-[90px]" />
      <img
        className="absolute top-[50px] left-[400px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src={iconParkSolidrailway}
      />
    </div>
  );
};

export default CardContainer;
