import type { NextPage } from "next";
import FrameComponent1 from "../components/frame-component1";

const ResetPassword: NextPage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(90deg,_rgba(255,_222,_233,_0.12),_rgba(181,_255,_252,_0.12)),_#fff] overflow-hidden flex flex-row items-start justify-start pt-[108px] px-[412px] pb-[204px] box-border leading-[normal] tracking-[normal] text-left text-base text-white font-h3 mq450:pl-5 mq450:pr-5 mq450:box-border mq675:pl-[206px] mq675:pr-[206px] mq675:box-border">
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
      <FrameComponent1 />
    </div>
  );
};

export default ResetPassword;
