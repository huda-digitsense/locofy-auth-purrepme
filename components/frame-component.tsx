import type { NextPage } from "next";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <form
      className={`m-0 w-[456px] shadow-[6px_5px_20px_10px_rgba(0,_0,_0,_0.08)] rounded-number bg-white flex flex-col items-start justify-start py-6 px-8 box-border gap-3 max-w-full mq750:pt-5 mq750:pb-5 mq750:box-border mq750:min-w-full mq1050:flex-1 ${className}`}
    >
      <div className="w-64 relative text-29xl text-navy text-center hidden items-center mq450:text-10xl mq1050:text-19xl">
        <span className="[line-break:anywhere] w-full">
          <span className="font-text-content-regular">Master</span>
          <b className="font-text-content-regular">U</b>
        </span>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-2">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <img
            className="h-[66px] w-[70px] relative object-cover"
            loading="lazy"
            alt=""
            src="/logo-1@2x.png"
          />
        </div>
        <h3 className="m-0 self-stretch relative text-6xl tracking-[0.01em] leading-[160%] font-medium font-h3 text-black text-center mq450:text-xl mq450:leading-[32px]">
          Welcome Back to Purrepme
        </h3>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
        <div className="flex-1 relative text-sm tracking-[0.01em] leading-[200%] font-text text-black text-center inline-block max-w-full">
          Log in to access your personalized TOEFL tests and track your
          progress. Keep improving and achieving your goals!
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
        <TextField
          className="[border:none] bg-[transparent] flex-1 font-text text-base text-gray-secondary max-w-full"
          placeholder="Email Address"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <img width="24px" height="24px" src="/emailsvgrepocom.svg" />
            ),
          }}
          sx={{
            "& fieldset": { borderColor: "#777a7d" },
            "& .MuiInputBase-root": {
              height: "44px",
              backgroundColor: "#fff",
              paddingLeft: "16px",
              borderRadius: "12px",
            },
            "& .MuiInputBase-input": { paddingLeft: "10px", color: "#727272" },
          }}
        />
      </div>
      <div className="self-stretch h-[52px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
        <div className="self-stretch flex-1 rounded-xl bg-white border-gray border-[1px] border-solid box-border flex flex-row items-start justify-between py-1 pl-[15px] pr-[17px] max-w-full gap-5">
          <div className="flex flex-row items-start justify-start gap-2.5">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/passwordsvgrepocom-1.svg"
              />
            </div>
            <input
              className="w-[76px] [border:none] [outline:none] font-text text-base bg-[transparent] relative tracking-[0.35px] leading-[200%] text-gray-secondary text-left inline-block p-0"
              placeholder="Password"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              alt=""
              src="/antdesigneyetwotone.svg"
            />
          </div>
          <div className="relative text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-gray-secondary text-left hidden min-w-[0.5px]">
            Password
          </div>
        </div>
      </div>
      <div className="relative text-lg font-poppins text-black text-left hidden">
        Welcome Back
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
        <div className="flex-1 relative text-base tracking-[0.15px] leading-[150%] font-semibold font-h3 text-dodgerblue text-right inline-block max-w-full">
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
            <input className="m-0 h-6 w-6 relative" type="checkbox" />
            <div className="relative text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-dark-gray text-left">
              Google
            </div>
          </div>
        </div>
        <div className="rounded-11xl bg-white border-dark-gray border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-[26px] gap-2.5">
          <input
            className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
            type="checkbox"
          />
          <div className="relative text-base tracking-[0.35px] leading-[200%] font-text-content-regular text-dark-gray text-left">
            Apple
          </div>
        </div>
      </div>
      <div className="self-stretch h-12 flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border top-[0] z-[99] sticky max-w-full">
        <Button
          className="self-stretch flex-1 max-w-full"
          startIcon={
            <img width="20px" height="20px" src="/lucidepawprint.svg" />
          }
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#777a7d",
            border: "#777a7d solid 1px",
            borderRadius: "12px",
            "&:hover": { background: "#777a7d" },
          }}
        >
          Login
        </Button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[23px] pr-[22px]">
        <div className="flex-1 relative text-base tracking-[0.15px] leading-[150%] text-right">
          <span className="font-text text-black">{`New here? `}</span>
          <span className="font-semibold font-h3 text-dodgerblue">Sign up</span>
          <span className="font-text text-black">
            {" "}
            and start practicing today!
          </span>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent;
