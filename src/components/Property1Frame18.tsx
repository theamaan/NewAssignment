import { FunctionComponent, useMemo, type CSSProperties } from "react";

type Property1Frame18Type = {
  /** Style props */
  property1Frame18Position?: CSSProperties["position"];
  property1Frame18Top?: CSSProperties["top"];
  property1Frame18Left?: CSSProperties["left"];
};

const Property1Frame18: FunctionComponent<Property1Frame18Type> = ({
  property1Frame18Position,
  property1Frame18Top,
  property1Frame18Left,
}) => {
  const property1Frame18Style: CSSProperties = useMemo(() => {
    return {
      position: property1Frame18Position,
      top: property1Frame18Top,
      left: property1Frame18Left,
    };
  }, [property1Frame18Position, property1Frame18Top, property1Frame18Left]);

  return (
    <div
      className="shadow-[0px_10px_10px_rgba(0,_0,_0,_0.25)] w-[1680px] h-[400px] text-left text-5xl text-darkorange font-poppins"
      style={property1Frame18Style}
    >
      <img
        className="absolute top-[0px] left-[0px] rounded-xl w-[1680px] h-[400px] object-cover"
        alt=""
        src="/rectangle-13@2x.png"
      />
      <b className="absolute top-[236px] left-[calc(50%_-_756px)]">
        Gurukripa Residential Coaching Campus With School
      </b>
      <div className="absolute top-[282px] left-[calc(50%_-_756px)] text-base leading-[22px] text-white inline-block w-[785px]">
        Gurukripa has opened a Residential Coaching Campus in Sikar, aiming to
        provide comprehensive, interactive, and efficient care for foundation
        course students. The campus features earthquake-resistant construction,
        modern architecture, and futuristic features like 24 hour power backup
        and water supply.
      </div>
    </div>
  );
};

export default Property1Frame18;
