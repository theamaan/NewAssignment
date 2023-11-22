import { FunctionComponent } from "react";

const Container1: FunctionComponent = () => {
  return (
    <div className="absolute top-[2419px] left-[calc(50%_-_841px)] w-[1677px] h-[514px] text-left text-base text-black font-poppins">
      <div className="absolute top-[0px] left-[483px] rounded-xl box-border w-[895px] h-[500px] border-[1px] border-solid border-cornflowerblue-200" />
      <div className="absolute top-[46px] left-[518px] leading-[30px] inline-block w-[823px]">
        <p className="[margin-block-start:0] [margin-block-end:10px] text-darkorange">
          <b>Dear Students,</b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          As the Director of Gurukripa Career Institute, I echo the words of
          Malcolm X: "Education is the passport to the future, for tomorrow
          belongs to those who prepare for it today."
        </p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          Since our inception in 2007, we have dedicated ourselves to helping
          you succeed in top engineering and medical entrance examinations.
          Thousands have benefited from our personalized attention, not only
          excelling in exams but also gaining valuable knowledge for their
          future journeys.
        </p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          I commend our exceptional faculty and staff for their unwavering
          commitment to nurturing your minds and helping you triumph in entrance
          tests. Beyond academic success, we equip you to face the future with
          resilience, turning failures into stepping stones for future triumphs.
        </p>
        <p className="m-0">
          To those who have succeeded, congratulations! To those who faced
          setbacks, remember, success favors perseverance. We pledge to redouble
          our efforts to guide every student not just in exams but in the
          broader test of life.
        </p>
      </div>
      <img
        className="absolute top-[0px] left-[0px] rounded-xl w-[450px] h-[500px] object-cover"
        alt=""
        src="/rectangle-11@2x.png"
      />
      <div className="absolute top-[125px] left-[1427px] w-[250px] h-[250px] text-center text-xl text-darkorange font-montserrat-alternates">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightgreen w-[250px] h-[250px]" />
        <b className="absolute top-[89px] left-[37px] inline-block w-44">
          <span>“</span>
          <span className="text-black">{` A Statement from the Director `}</span>
        </b>
        <b className="absolute top-[135px] left-[181px] [transform:_rotate(180deg)] [transform-origin:0_0]">
          “
        </b>
        <img
          className="absolute top-[168px] left-[144px] w-[69.4px] h-14 object-cover opacity-[0.5]"
          alt=""
          src="/image-10@2x.png"
        />
      </div>
    </div>
  );
};

export default Container1;
