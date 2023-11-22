import { FunctionComponent } from "react";

const SocialMediaSection1: FunctionComponent = () => {
  return (
    <div className="absolute bottom-[0px] left-[calc(50%_-_960px)] bg-oldlace w-[1920px] h-[595px] overflow-hidden text-left text-lg text-black font-montserrat">
      <img
        className="absolute top-[57px] left-[122px] rounded-xl w-[181.7px] h-[72px] object-cover"
        alt=""
        src="/image-2@2x.png"
      />
      <div className="absolute top-[183px] left-[128px] text-xl inline-block w-[379px]">
        <p className="m-0">
          <b>Address</b>
        </p>
        <p className="m-0">
          <b>&nbsp;</b>
        </p>
        <p className="m-0">Gurukripa Career Institute(GCI)</p>
        <p className="m-0">{`Head Office: Jyoti Nagar, Piprali Road, Sikar `}</p>
        <p className="m-0">Mob.: 88751-24365</p>
        <p className="m-0">info@gurukripa.ac.in</p>
        <p className="m-0">Phone: 88751-24365</p>
      </div>
      <b className="absolute top-[183px] left-[597px] text-xl inline-block w-[327px]">
        Gurukripa Career Institute(GCI)
      </b>
      <b className="absolute top-[173px] left-[972px] text-11xl">
        Follow us on
      </b>
      <img
        className="absolute top-[234px] left-[970px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/instagram--jpeg@2x.png"
      />
      <img
        className="absolute top-[244px] left-[1110px] w-[30px] h-[30px] object-cover"
        alt=""
        src="/facebook--jpeg@2x.png"
      />
      <img
        className="absolute top-[234px] left-[1040px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/linkedin--jpeg@2x.png"
      />
      <img
        className="absolute top-[236px] left-[1618px] rounded-131xl w-[150px] h-[150px] overflow-hidden"
        alt=""
        src="/frame-48.svg"
      />
      <div className="absolute top-[227px] left-[597px]">Home</div>
      <div className="absolute top-[264px] left-[597px]">Programs</div>
      <div className="absolute top-[301px] left-[597px]">E - Learning</div>
      <div className="absolute top-[338px] left-[597px]">About Us</div>
      <div className="absolute top-[412px] left-[597px]">Student Portal</div>
      <div className="absolute top-[375px] left-[597px]">Results</div>
    </div>
  );
};

export default SocialMediaSection1;
