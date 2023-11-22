import { FunctionComponent, useMemo, type CSSProperties } from "react";

type ProgramsContainerType = {
  programImageUrl?: string;
  programDescription?: string;
  programBenefits?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const ProgramsContainer: FunctionComponent<ProgramsContainerType> = ({
  programImageUrl,
  programDescription,
  programBenefits,
  propTop,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[19px] left-[1302px] flex flex-col items-start justify-start gap-[13px] text-left text-lg text-black font-poppins"
      style={frameDiv1Style}
    >
      <img
        className="relative w-[50px] h-[50px] overflow-hidden shrink-0"
        alt=""
        src={programImageUrl}
      />
      <b className="relative inline-block w-[300px]">{programDescription}</b>
      <div className="relative text-sm text-gray inline-block w-[335px]">
        {programBenefits}
      </div>
    </div>
  );
};

export default ProgramsContainer;
