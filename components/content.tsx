import type { NextPage } from "next";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-center justify-start gap-4 max-w-full text-center text-29xl text-navy font-text-content-regular ${className}`}
    >
      <div className="w-64 relative hidden items-center mq450:text-10xl mq750:text-19xl">
        <span className="[line-break:anywhere] w-full">
          <span>Master</span>
          <b>U</b>
        </span>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-5 max-w-full text-left text-base text-gray-secondary font-text">
        <div className="self-stretch flex flex-col items-center justify-start gap-2 text-center text-6xl text-black font-h3">
          <img
            className="w-[70px] h-[66px] relative object-cover"
            loading="lazy"
            alt=""
            src="/logo-1@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-3">
            <h2 className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[160%] font-medium font-[inherit] mq450:text-xl mq450:leading-[32px]">
              Forgot Password
            </h2>
            <div className="self-stretch relative text-sm tracking-[0.25px] leading-[180%] font-text-content-regular text-black-primary hidden">
              Forgot your password? Please enter your email address below. You
              will receive a link to create a new password via email.
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-white border-gray border-[1px] border-solid hidden flex-col items-start justify-center py-1 px-4">
          <div className="relative">
            <div className="absolute top-[0px] left-[34px] tracking-[0.35px] leading-[200%] inline-block min-w-[79px]">
              Full Name
            </div>
            <div className="absolute top-[5px] left-[-32px] overflow-hidden hidden flex-col items-start justify-start py-[5px] pl-0.5 pr-px">
              <img className="w-[21px] h-[15px] relative" alt="" />
            </div>
            <img
              className="absolute top-[4px] left-[0px] w-6 h-6 overflow-hidden hidden"
              alt=""
            />
            <img
              className="absolute top-[4px] left-[0px] w-6 h-6 overflow-hidden object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-white border-gray border-[1px] border-solid hidden flex-col items-start justify-center py-1 px-4">
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
        <div className="self-stretch rounded-xl bg-white border-gray border-[1px] border-solid hidden flex-row items-center justify-between py-1 px-4 gap-5">
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
        <div className="self-stretch rounded-xl bg-white border-gray border-[1px] border-solid hidden flex-row items-center justify-between py-1 px-4 gap-5">
          <div className="relative">
            <div className="absolute top-[0px] left-[34px] tracking-[0.35px] leading-[200%]">
              ConfirmPassword
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
        <div className="self-stretch h-6 relative hidden text-lg text-black font-poppins">
          <div className="absolute top-[-293px] left-[-276.7px] hidden w-full h-full">
            Welcome Back
          </div>
          <div className="absolute top-[0px] left-[0px] text-base tracking-[0.15px] leading-[150%] font-semibold font-h3 text-dodgerblue text-right inline-block w-full h-full">
            Forgot Password
          </div>
        </div>
        <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start text-white font-text-content-regular">
          <div className="self-stretch rounded-3xl bg-navy flex flex-col items-center justify-center p-3">
            <b className="relative tracking-[0.25px] leading-[160%]">Login</b>
          </div>
        </div>
        <div className="self-stretch h-8 relative hidden text-lg text-black font-poppins">
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
            <img className="h-6 w-6 relative overflow-hidden shrink-0" alt="" />
            <div className="relative tracking-[0.35px] leading-[200%]">
              Apple
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-number-2 bg-green-pastel overflow-hidden flex flex-row items-center justify-start flex-wrap content-center py-1.5 px-4 box-border gap-0 max-w-full [row-gap:20px] text-sm text-green font-text-content-regular">
          <div className="flex flex-row items-start justify-start py-[7px] pl-0 pr-3">
            <img
              className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/checkcircleoutlined.svg"
            />
          </div>
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-start py-2 px-0 box-border gap-1 min-w-[212px] max-w-full">
            <div className="relative tracking-[0.25px] leading-[180%] hidden">
              Password reset email has been sent.
            </div>
            <div className="self-stretch relative tracking-[0.01em] leading-[200%] font-text text-black">
              Password reset email has been sent.
            </div>
          </div>
          <div className="overflow-hidden hidden flex-row items-start justify-start pt-1 pb-0 pl-4 pr-0 text-smi text-success-main font-button-small">
            <div className="rounded-borderradius overflow-hidden flex flex-col items-center justify-center py-1 px-[5px]">
              <div className="flex flex-row items-center justify-center gap-2">
                <img className="h-[18px] w-4 relative hidden" alt="" />
                <div className="relative tracking-[0.46px] leading-[22px] uppercase font-medium">
                  Label
                </div>
                <img className="h-[18px] w-4 relative hidden" alt="" />
              </div>
            </div>
          </div>
          <div className="overflow-hidden hidden flex-row items-start justify-start pt-1 pb-0 pl-4 pr-0">
            <div className="rounded-81xl overflow-hidden flex flex-col items-center justify-center p-[5px]">
              <div className="flex flex-row items-start justify-start">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-row items-center justify-start gap-[49px] max-w-full text-sm text-white font-h3">
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
            <div className="relative leading-[120%] font-semibold">Retake</div>
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
              className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
              alt=""
            />
            <img className="h-5 w-5 relative overflow-hidden shrink-0" alt="" />
            <div className="flex flex-row items-center justify-start">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                alt=""
              />
              <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                Reset Password
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
        <div className="relative text-sm tracking-[0.01em] leading-[200%] text-black-primary">
          Great news! We've just sent you an email to reset your password.
          Please check your inbox for further instructions.
        </div>
        <div className="w-[102px] relative tracking-[0.15px] leading-[150%] font-semibold font-h3 text-dodgerblue text-right inline-block">
          Back to login
        </div>
      </div>
      <div className="self-stretch relative text-sm tracking-[0.25px] leading-[180%] text-black-primary hidden">
        Forgot your password? Please enter your email address below. You will
        receive a link to create a new password via email.
      </div>
    </div>
  );
};

export default Content;
