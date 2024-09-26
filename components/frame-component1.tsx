import type { NextPage } from "next";
import { Button } from "@mui/material";
import Header from "./header";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <form
      className={`m-0 flex-1 shadow-[6px_5px_20px_10px_rgba(0,_0,_0,_0.05)] rounded-number bg-white flex flex-col items-start justify-start p-8 box-border gap-3 max-w-full mq450:pt-[21px] mq450:pb-[21px] mq450:box-border ${className}`}
    >
      <div className="w-64 relative text-29xl text-navy text-center hidden items-center mq450:text-10xl mq750:text-19xl">
        <span className="[line-break:anywhere] w-full">
          <span className="font-text-content-regular">Master</span>
          <b className="font-text-content-regular">U</b>
        </span>
      </div>
      <Header joinPurrepmeToday="Reset Password" />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
        <div className="flex-1 relative text-sm tracking-[0.01em] leading-[200%] font-text text-black text-center inline-block max-w-full">
          Please enter a new password below.
        </div>
      </div>
      <div className="self-stretch rounded-xl bg-white border-gray border-[1px] border-solid hidden flex-col items-start justify-center py-1 px-4">
        <div className="relative">
          <div className="absolute top-[0px] left-[34px] text-base tracking-[0.35px] leading-[200%] font-text text-gray-secondary text-left inline-block min-w-[79px]">
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
          <div className="absolute top-[0px] left-[34px] text-base tracking-[0.35px] leading-[200%] font-text text-gray-secondary text-left inline-block min-w-[110px]">
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
          <div className="absolute top-[0px] left-[34px] text-base tracking-[0.35px] leading-[200%] font-text text-gray-secondary text-left inline-block min-w-[75px]">
            Password
          </div>
          <img
            className="absolute top-[4px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
          />
        </div>
        <div className="relative">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
            alt=""
          />
          <div className="absolute top-[13.2px] left-[-11.7px] text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-gray-secondary text-left hidden w-[0.5px] h-[102.4px] min-w-[0.5px]">
            Password
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-xl bg-white border-gray border-[1px] border-solid hidden flex-row items-center justify-between py-1 px-4 gap-5">
        <div className="relative">
          <div className="absolute top-[0px] left-[34px] text-base tracking-[0.35px] leading-[200%] font-text text-gray-secondary text-left">
            ConfirmPassword
          </div>
          <img
            className="absolute top-[4px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
          />
        </div>
        <div className="relative">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
            alt=""
          />
          <div className="absolute top-[13.2px] left-[-11.7px] text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-gray-secondary text-left hidden w-[0.5px] h-[102.4px] min-w-[0.5px]">
            Password
          </div>
        </div>
      </div>
      <div className="self-stretch h-6 relative hidden">
        <div className="absolute top-[-293px] left-[-276.7px] text-lg font-poppins text-black text-left hidden w-full h-full">
          Welcome Back
        </div>
        <div className="absolute top-[0px] left-[0px] text-base tracking-[0.15px] leading-[150%] font-semibold font-h3 text-dodgerblue text-right inline-block w-full h-full">
          Forgot Password
        </div>
      </div>
      <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start">
        <div className="self-stretch rounded-3xl bg-navy flex flex-col items-center justify-center p-3">
          <b className="relative text-base tracking-[0.25px] leading-[160%] font-text-content-regular text-white text-left">
            Login
          </b>
        </div>
      </div>
      <div className="self-stretch h-8 relative hidden">
        <div className="absolute top-[-293px] left-[-276.7px] text-lg font-poppins text-black text-left hidden w-[386.2px]">
          Welcome Back
        </div>
        <div className="absolute top-[0px] left-[0px] text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-gray-secondary text-center inline-block w-full h-full">
          Or Login with
        </div>
      </div>
      <div className="self-stretch hidden flex-row items-start justify-center gap-6 mq450:flex-wrap">
        <div className="rounded-11xl bg-white border-dark-gray border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-[26px]">
          <div className="flex flex-row items-center justify-start py-0 px-[3px] gap-2.5">
            <img className="h-6 w-6 relative" alt="" />
            <div className="relative text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-dark-gray text-left">
              Google
            </div>
          </div>
        </div>
        <div className="rounded-11xl bg-white border-dark-gray border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-[26px] gap-2.5">
          <img className="h-6 w-6 relative overflow-hidden shrink-0" alt="" />
          <div className="relative text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-dark-gray text-left">
            Apple
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-xl bg-white border-gray border-[1px] border-solid hidden flex-row items-center justify-between py-1 px-4 gap-5">
        <div className="relative">
          <div className="absolute top-[0px] left-[34px] text-base tracking-[0.35px] leading-[200%] font-text text-black text-left inline-block min-w-[114px]">
            New Password
          </div>
          <img
            className="absolute top-[4px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
          />
        </div>
        <div className="relative">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
            alt=""
          />
          <div className="absolute top-[13.2px] left-[-11.7px] text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-gray-secondary text-left hidden w-[0.5px] h-[102.4px] min-w-[0.5px]">
            Password
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-xl bg-white border-gray border-[1px] border-solid hidden flex-row items-center justify-between py-1 px-4 gap-5">
        <div className="relative">
          <div className="absolute top-[0px] left-[34px] text-base tracking-[0.35px] leading-[200%] font-text text-black text-left">
            Confirm New Password
          </div>
          <img
            className="absolute top-[4px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
          />
        </div>
        <div className="relative">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
            alt=""
          />
          <div className="absolute top-[13.2px] left-[-11.7px] text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-gray-secondary text-left hidden w-[0.5px] h-[102.4px] min-w-[0.5px]">
            Password
          </div>
        </div>
      </div>
      <div className="self-stretch hidden flex-col items-start justify-start gap-1">
        <div className="self-stretch rounded-xl bg-white border-gray border-[1px] border-solid flex flex-row items-center justify-between py-1 px-4 gap-5">
          <div className="relative">
            <div className="absolute top-[0px] left-[34px] text-base tracking-[0.35px] leading-[200%] font-text text-transparent !bg-clip-text [background:linear-gradient(90deg,_#ff8e3c,_#f7931a_50%,_#ffaf4f)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[10px]">
              |
            </div>
            <img
              className="absolute top-[4px] left-[0px] w-6 h-6 overflow-hidden"
              alt=""
            />
          </div>
          <div className="h-6 w-6 relative hidden">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
              alt=""
            />
            <img
              className="absolute top-[1px] left-[-44px] w-full h-full overflow-hidden hidden"
              alt=""
            />
            <div className="absolute top-[14.2px] left-[-55.7px] text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-gray-secondary text-left hidden w-[0.5px] h-[102.4px] min-w-[0.5px]">
              Password
            </div>
          </div>
          <div className="relative">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
              alt=""
            />
            <div className="absolute top-[13.2px] left-[-11.7px] text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-gray-secondary text-left hidden w-[0.5px] h-[102.4px] min-w-[0.5px]">
              Password
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch relative text-smi leading-[160%] font-text text-gray text-left">
            Your new password should include at least 8 characters, a mix of
            uppercase and lowercase letters, at least one number, and at least
            one special character (e.g., !@#$%).
          </div>
        </div>
      </div>
      <div className="self-stretch hidden flex-col items-start justify-start gap-1">
        <div className="self-stretch rounded-xl bg-white border-gray border-[1px] border-solid flex flex-row items-center justify-between py-1 px-4 gap-5">
          <div className="relative">
            <div className="absolute top-[0px] left-[34px] text-base tracking-[0.35px] leading-[200%] font-text text-left inline-block min-w-[89px]">
              <span className="text-black">password</span>
              <span className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#ff8e3c,_#f7931a_50%,_#ffaf4f)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                |
              </span>
            </div>
            <img
              className="absolute top-[4px] left-[0px] w-6 h-6 overflow-hidden"
              alt=""
            />
          </div>
          <div className="relative">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
              alt=""
            />
            <img
              className="absolute top-[1px] left-[-44px] w-full h-full overflow-hidden hidden"
              alt=""
            />
            <div className="absolute top-[14.2px] left-[-55.7px] text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-gray-secondary text-left hidden w-[0.5px] h-[102.4px] min-w-[0.5px]">
              Password
            </div>
          </div>
          <div className="h-6 w-6 relative hidden">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
              alt=""
            />
            <div className="absolute top-[13.2px] left-[-11.7px] text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-gray-secondary text-left hidden w-[0.5px] h-[102.4px] min-w-[0.5px]">
              Password
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="relative text-smi leading-[160%] font-text text-red text-left">
            Your new password doesn’t meet the required criteria.
          </div>
        </div>
      </div>
      <div className="self-stretch h-[52px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
        <div className="self-stretch flex-1 rounded-xl bg-white border-gray border-[1px] border-solid box-border flex flex-row items-start justify-between py-1.5 pl-[15px] pr-[17px] max-w-full gap-5">
          <div className="flex flex-row items-start justify-start gap-2.5">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/passwordsvgrepocom-1-6.svg"
              />
            </div>
            <div className="relative text-sm tracking-[0.01em] leading-[200%] font-text text-black text-left inline-block min-w-[86px]">
              Password90!
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              alt=""
              src="/mdieyeoffoutline-2.svg"
            />
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
            alt=""
          />
          <div className="relative text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-gray-secondary text-left hidden min-w-[0.5px]">
            Password
          </div>
          <div className="h-6 w-6 relative hidden">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
              alt=""
            />
            <div className="absolute top-[13.2px] left-[-11.7px] text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-gray-secondary text-left hidden w-[0.5px] h-[102.4px] min-w-[0.5px]">
              Password
            </div>
          </div>
        </div>
      </div>
      <div className="hidden flex-col items-start justify-start">
        <div className="relative text-smi leading-[160%] font-text text-red text-left">
          Your password doesn’t meet the required criteria.
        </div>
      </div>
      <div className="self-stretch rounded-xl bg-white border-gray border-[1px] border-solid hidden flex-row items-center justify-between py-1 px-4 gap-5">
        <div className="relative">
          <div className="absolute top-[0px] left-[34px] text-base tracking-[0.35px] leading-[200%] font-text text-gray-secondary text-left">
            Confirm New Password
          </div>
          <img
            className="absolute top-[4px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
          />
        </div>
        <div className="relative">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
            alt=""
          />
          <div className="absolute top-[13.2px] left-[-11.7px] text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-gray-secondary text-left hidden w-[0.5px] h-[102.4px] min-w-[0.5px]">
            Password
          </div>
        </div>
      </div>
      <div className="self-stretch h-[52px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
        <div className="self-stretch flex-1 rounded-xl bg-white border-gray border-[1px] border-solid box-border flex flex-row items-start justify-between py-1.5 pl-[15px] pr-[17px] max-w-full gap-5">
          <div className="flex flex-row items-start justify-start gap-2.5">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/passwordsvgrepocom-1-8.svg"
              />
            </div>
            <div className="relative text-sm tracking-[0.01em] leading-[200%] font-text text-black text-left inline-block min-w-[86px]">
              Password90!
            </div>
          </div>
          <div className="h-6 w-6 relative hidden">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
              alt=""
            />
            <div className="absolute top-[13.2px] left-[-11.7px] text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-gray-secondary text-left hidden w-[0.5px] h-[102.4px] min-w-[0.5px]">
              Password
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              alt=""
              src="/mdieyeoffoutline-2.svg"
            />
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
            alt=""
          />
          <div className="relative text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-gray-secondary text-left hidden min-w-[0.5px]">
            Password
          </div>
        </div>
      </div>
      <div className="self-stretch hidden flex-col items-start justify-start">
        <div className="self-stretch relative text-smi leading-[160%] font-text text-red text-left">
          The passwords you entered don’t match. Please ensure both passwords
          are identical.
        </div>
      </div>
      <Button
        className="self-stretch h-[42px]"
        startIcon={
          <img
            width="20px"
            height="20px"
            src="/passwordaccountsecurityresetsafetysvgrepocom-1.svg"
          />
        }
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "14",
          background: "#f7931a",
          border: "#f7931a solid 1px",
          borderRadius: "12px",
          "&:hover": { background: "#f7931a" },
          height: 42,
        }}
      >
        Reset Password
      </Button>
      <div className="w-[101px] relative text-base tracking-[0.15px] leading-[150%] font-semibold font-h3 text-dodgerblue text-right hidden">
        Back to login
      </div>
      <div className="w-[101px] relative text-base tracking-[0.15px] leading-[150%] font-semibold font-h3 text-dodgerblue text-right hidden">
        Back to login
      </div>
    </form>
  );
};

export default FrameComponent1;
