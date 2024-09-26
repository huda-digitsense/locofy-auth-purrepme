import type { NextPage } from "next";
import Form from "../components/form";

const SignUp: NextPage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(90deg,_rgba(255,_222,_233,_0.12),_rgba(181,_255,_252,_0.12)),_#fff] overflow-hidden flex flex-row items-start justify-start pt-16 pb-11 pl-[87px] pr-[100px] box-border gap-[170px] leading-[normal] tracking-[normal] text-left text-base text-white font-h3 lg:gap-[85px] lg:pl-[43px] lg:pr-[50px] lg:box-border mq750:gap-[42px] mq750:pl-[21px] mq750:pr-[25px] mq750:box-border mq450:gap-[21px] mq1050:flex-wrap">
      <div className="h-[88px] w-[1280px] relative hidden max-w-full">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(90deg,_#ff8e3c,_#f7931a_50%,_#ffaf4f)] w-full h-full" />
        <div className="absolute top-[24px] left-[32px] flex flex-row items-center justify-start gap-1 text-lg">
          <img
            className="h-10 w-[42px] relative object-cover"
            alt=""
            src="/logo-1-1@2x.png"
          />
          <div className="flex-1 relative">
            <b className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[24px] inline-block min-w-[88px] w-full h-full">
              Purrepme
            </b>
          </div>
        </div>
        <div className="absolute top-[32px] left-[1180px] w-[68px] h-6 hidden">
          <div className="absolute top-[0px] left-[-19px] leading-[24px] font-semibold hidden">
            Submit
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[24px] font-semibold inline-block min-w-[28px]">
            Exit
          </div>
          <img
            className="absolute top-[0px] left-[44px] w-6 h-6 overflow-hidden object-contain"
            alt=""
          />
        </div>
        <div className="absolute top-[19px] left-[1101px] w-[147px] h-[50px] text-center">
          <div className="absolute top-[0px] left-[0px] [filter:drop-shadow(0px_8px_16px_rgba(0,_102,_204,_0.2))] rounded-11xl border-white border-[2px] border-solid box-border w-full h-full" />
          <img
            className="absolute top-[13px] left-[82px] w-6 h-6 overflow-hidden"
            alt=""
          />
          <div className="absolute top-[15px] left-[47px] tracking-[0.02em] font-extrabold inline-block min-w-[31px]">
            Exit
          </div>
          <img
            className="absolute top-[13px] left-[93px] w-6 h-6 overflow-hidden object-contain hidden"
            alt=""
          />
        </div>
        <div className="absolute top-[19px] left-[918px] w-[151px] h-[50px] text-center">
          <div className="absolute top-[0px] left-[0px] [filter:drop-shadow(0px_8px_16px_rgba(0,_102,_204,_0.2))] rounded-11xl border-white border-[2px] border-solid box-border w-full h-full" />
          <img
            className="absolute top-[13px] left-[82px] w-6 h-6 overflow-hidden hidden"
            alt=""
          />
          <div className="absolute top-[15px] left-[46px] tracking-[0.02em] font-extrabold inline-block min-w-[58px]">
            Review
          </div>
          <img
            className="absolute top-[13px] left-[93px] w-6 h-6 overflow-hidden object-contain hidden"
            alt=""
          />
        </div>
      </div>
      <img
        className="h-[1317px] w-[1695px] relative overflow-hidden shrink-0 hidden max-w-full"
        alt=""
      />
      <img className="h-[676px] w-[1268px] relative hidden max-w-full" alt="" />
      <div className="shadow-[6px_5px_20px_10px_rgba(0,_0,_0,_0.08)] rounded-number bg-white hidden flex-row items-start justify-start py-6 px-8 box-border max-w-full text-center text-29xl text-navy font-text-content-regular">
        <div className="flex flex-col items-center justify-start gap-4 max-w-full">
          <div className="w-64 relative hidden items-center mq450:text-10xl mq1050:text-19xl">
            <span className="[line-break:anywhere] w-full">
              <span>Master</span>
              <b>U</b>
            </span>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-5 max-w-full text-left text-base text-black font-text">
            <div className="self-stretch flex flex-col items-center justify-start gap-2 text-center text-6xl font-h3">
              <img
                className="w-[70px] h-[66px] relative object-cover"
                alt=""
                src="/logo-1@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch relative leading-[120%] font-semibold mq450:text-xl mq450:leading-[24px]">
                  Welcome Back to Purrepme
                </div>
                <div className="self-stretch relative text-sm leading-[180%] font-text">
                  Log in to access your personalized TOEFL tests and track your
                  progress. Keep improving and achieving your goals!
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-white border-gray border-[1px] border-solid flex flex-col items-start justify-center py-1 px-4 text-gray-secondary">
              <div className="relative">
                <div className="absolute top-[0px] left-[34px] tracking-[0.35px] leading-[200%] inline-block min-w-[110px]">
                  Email Address
                </div>
                <div className="absolute top-[5px] left-[-32px] overflow-hidden hidden flex-col items-start justify-start py-[5px] pl-0.5 pr-px">
                  <img className="w-[21px] h-[15px] relative" alt="" />
                </div>
                <img
                  className="absolute top-[4px] left-[0px] w-6 h-6 overflow-hidden"
                  alt=""
                />
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-white border-gray border-[1px] border-solid flex flex-row items-center justify-between py-1 px-4 gap-5 text-gray-secondary">
              <div className="relative">
                <div className="absolute top-[0px] left-[34px] tracking-[0.35px] leading-[200%] inline-block min-w-[75px]">
                  Password
                </div>
                <img
                  className="absolute top-[4px] left-[0px] w-6 h-6 overflow-hidden"
                  alt=""
                />
              </div>
              <div className="relative font-text-content-regular">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
                  alt=""
                />
                <div className="absolute top-[13.2px] left-[-11.7px] tracking-[0.35px] leading-[200%] hidden w-[0.5px] h-[102.4px] min-w-[0.5px]">
                  Password
                </div>
              </div>
            </div>
            <div className="self-stretch relative text-lg font-poppins">
              <div className="absolute top-[-293px] left-[-276.7px] hidden w-full h-full">
                Welcome Back
              </div>
              <div className="absolute top-[0px] left-[0px] text-base tracking-[0.15px] leading-[150%] font-semibold font-h3 text-dodgerblue text-right inline-block w-full h-full">
                Forgot Password
              </div>
            </div>
            <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start text-white font-text-content-regular">
              <div className="self-stretch rounded-3xl bg-navy flex flex-col items-center justify-center p-3">
                <b className="relative tracking-[0.25px] leading-[160%]">
                  Login
                </b>
              </div>
            </div>
            <div className="self-stretch h-8 relative hidden text-lg font-poppins">
              <div className="absolute top-[-293px] left-[-276.7px] hidden w-[386.2px]">
                Welcome Back
              </div>
              <div className="absolute top-[0px] left-[0px] text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-gray-secondary text-center inline-block w-full h-full">
                Or Login with
              </div>
            </div>
            <div className="self-stretch hidden flex-row items-start justify-center gap-6 text-dark-gray font-text-content-regular mq450:flex-wrap">
              <div className="rounded-11xl bg-white border-dark-gray border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-[26px]">
                <div className="flex flex-row items-center justify-start py-0 px-[3px] gap-2.5">
                  <img className="h-6 w-6 relative" alt="" />
                  <div className="relative tracking-[0.35px] leading-[200%]">
                    Google
                  </div>
                </div>
              </div>
              <div className="rounded-11xl bg-white border-dark-gray border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-[26px] gap-2.5">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                />
                <div className="relative tracking-[0.35px] leading-[200%]">
                  Apple
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[49px] max-w-full text-sm text-white font-h3">
              <div className="h-7 shadow-[0px_1px_2px_rgba(10,_13,_20,_0.03)] rounded-lg bg-white border-dodgerblue border-[1px] border-solid box-border overflow-hidden hidden flex-row items-center justify-center py-0.5 px-[11px] gap-1.5 text-dodgerblue">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain hidden"
                  alt=""
                />
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                />
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                  <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                    Retake Test
                  </div>
                </div>
              </div>
              <div className="h-[26px] shadow-[6px_5px_20px_10px_rgba(0,_0,_0,_0.05)] rounded-3xs [background:linear-gradient(90deg,_#ff8e3c,_#f7931a_50%,_#ffaf4f)] border-chocolate border-[1px] border-solid box-border hidden flex-row items-center justify-center py-0.5 px-[11px] gap-1.5 text-center">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                />
                <div className="relative leading-[120%] font-semibold">
                  Retake
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain hidden"
                  alt=""
                />
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain hidden"
                  alt=""
                />
              </div>
              <div className="h-7 shadow-[0px_1px_2px_rgba(10,_13,_20,_0.03)] rounded-lg bg-white border-chocolate border-[1px] border-solid box-border overflow-hidden hidden flex-row items-center justify-center py-0.5 px-[11px] gap-1.5 text-vivid-orange">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain hidden"
                  alt=""
                />
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                />
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                  <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                    Start Test
                  </div>
                </div>
              </div>
              <div className="flex-1 shadow-[0px_1px_2px_rgba(10,_13,_20,_0.03)] rounded-xl bg-vivid-orange border-vivid-orange border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-center py-2 px-3 gap-2 max-w-full text-base">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain hidden"
                  alt=""
                />
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                  alt=""
                />
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt=""
                />
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                  <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                    Login
                  </div>
                </div>
              </div>
              <div className="h-7 shadow-[0px_1px_2px_rgba(10,_13,_20,_0.03)] rounded-lg bg-white border-gray border-[1px] border-solid box-border overflow-hidden hidden flex-row items-center justify-center py-0.5 px-[11px] gap-1.5 text-gray">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain hidden"
                  alt=""
                />
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                  alt=""
                />
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 object-contain"
                  alt=""
                />
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                  <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                    History
                  </div>
                </div>
              </div>
              <div className="shadow-[0px_1px_2px_rgba(10,_13,_20,_0.03)] rounded-lg overflow-hidden hidden flex-row items-center justify-center py-1 px-0 text-gray">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 object-contain hidden"
                  alt=""
                />
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                  alt=""
                />
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                  <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                    History
                  </div>
                </div>
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 object-contain hidden"
                  alt=""
                />
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 object-contain"
                  alt=""
                />
              </div>
            </div>
            <div className="relative tracking-[0.15px] leading-[150%] text-right inline-block max-w-full">
              <span>{`New here? `}</span>
              <span className="font-semibold font-h3 text-dodgerblue">
                Sign up
              </span>
              <span> and start practicing today!</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[720px] w-[640px] relative [background:linear-gradient(90deg,_rgba(91,_196,_255,_0.12),_rgba(255,_135,_46,_0.12)),_#fff] hidden max-w-full" />
      <div className="flex-1 flex flex-col items-start justify-start pt-[90px] px-0 pb-0 box-border min-w-[304px] max-w-full mq750:pt-[58px] mq750:box-border">
        <img
          className="self-stretch h-[411px] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/frame-10000035821@2x.png"
        />
      </div>
      <Form />
    </div>
  );
};

export default SignUp;
