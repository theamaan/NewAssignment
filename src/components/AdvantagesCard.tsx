import { FunctionComponent, useMemo, type CSSProperties } from "react";

type AdvantagesCardType = {
  imageId?: string;
  componentTitle?: string;
  careerGuidanceText?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const AdvantagesCard: FunctionComponent<AdvantagesCardType> = ({
  imageId,
  componentTitle,
  careerGuidanceText,
  propTop,
  propBackgroundColor,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      backgroundColor: propBackgroundColor,
    };
  }, [propTop, propBackgroundColor]);

  return (
    <div
      className="absolute top-[23px] left-[874px] bg-white flex flex-col items-start justify-start gap-[13px] text-left text-lg text-black font-poppins"
      style={frameDivStyle}
    >
      <img
        className="relative w-[50px] h-[50px] overflow-hidden shrink-0"
        alt=""
        src={imageId}
      />
      <b className="relative inline-block w-[300px]">{componentTitle}</b>
      <div className="relative text-sm text-gray inline-block w-[335px]">
        {careerGuidanceText}
      </div>
    </div>
  );
};

export default AdvantagesCard;
