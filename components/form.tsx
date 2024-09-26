import type { NextPage } from "next";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Header from "./header";

export type FormType = {
  className?: string;
};

const Form: NextPage<FormType> = ({ className = "" }) => {
  return (
    <form
      className={`m-0 w-[456px] shadow-[6px_5px_20px_10px_rgba(0,_0,_0,_0.05)] rounded-number bg-white flex flex-col items-start justify-start p-8 box-border gap-3 max-w-full mq750:pt-[21px] mq750:pb-[21px] mq750:box-border mq750:min-w-full mq1050:flex-1 ${className}`}
    >
      <div className="w-64 relative text-29xl text-navy text-center hidden items-center mq450:text-10xl mq1050:text-19xl">
        <span className="[line-break:anywhere] w-full">
          <span className="font-text-content-regular">Master</span>
          <b className="font-text-content-regular">U</b>
        </span>
      </div>
      <Header joinPurrepmeToday="Join Purrepme Today" />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
        <div className="flex-1 relative text-sm tracking-[0.01em] leading-[200%] font-text text-black text-center inline-block max-w-full">
          Create your account and get access to personalized TOEFL practice and
          real tests tailored to your goals.
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
        <TextField
          className="[border:none] bg-[transparent] flex-1 font-text text-sm text-black max-w-full"
          placeholder="Brian Liu"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <img width="24px" height="24px" src="/profilesvgrepocom-1.png" />
            ),
          }}
          sx={{
            "& fieldset": { borderColor: "#777a7d" },
            "& .MuiInputBase-root": {
              height: "44px",
              backgroundColor: "#fff",
              paddingLeft: "16px",
              borderRadius: "12px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { paddingLeft: "10px", color: "#333" },
          }}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
        <TextField
          className="[border:none] bg-[transparent] flex-1 font-text text-sm text-black max-w-full"
          placeholder="brianliu@gmail.com"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <img width="24px" height="24px" src="/emailsvgrepocom-1.svg" />
            ),
          }}
          sx={{
            "& fieldset": { borderColor: "#777a7d" },
            "& .MuiInputBase-root": {
              height: "44px",
              backgroundColor: "#fff",
              paddingLeft: "16px",
              borderRadius: "12px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { paddingLeft: "10px", color: "#333" },
          }}
        />
      </div>
      <div className="self-stretch hidden flex-col items-start justify-start">
        <div className="self-stretch relative text-smi leading-[160%] font-text text-red text-left">
          It looks like this email is already registered. Please log in or use a
          different email to sign up.
        </div>
      </div>
      <div className="self-stretch rounded-xl bg-white border-gray border-[1px] border-solid hidden flex-col items-start justify-center py-1 px-4">
        <div className="relative">
          <div className="absolute top-[0px] left-[34px] text-base tracking-[0.35px] leading-[200%] font-text text-black text-left whitespace-nowrap">
            johndoe@gmail.com
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
          <div className="absolute top-[0px] left-[34px] text-base tracking-[0.35px] leading-[200%] font-text text-black text-left inline-block min-w-[120px]">
            *************
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
                src="/passwordsvgrepocom-1-2.svg"
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
      <div className="self-stretch h-[52px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
        <div className="self-stretch flex-1 rounded-xl bg-white border-gray border-[1px] border-solid box-border flex flex-row items-start justify-between py-1.5 pl-[15px] pr-[17px] max-w-full gap-5">
          <div className="flex flex-row items-start justify-start gap-2.5">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/passwordsvgrepocom-1-3.svg"
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
      <div className="self-stretch h-[50px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
        <Button
          className="self-stretch flex-1 max-w-full"
          startIcon={
            <img width="20px" height="20px" src="/lucidepawprint-1.svg" />
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
          }}
        >
          Sign Up
        </Button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[72px] pr-[71px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 relative text-sm text-right">
          <span className="tracking-[0.01em] leading-[200%] font-text">
            <span className="text-black">Already have an account?</span>
            <span className="text-black1">{` `}</span>
          </span>
          <span className="tracking-[0.01em] leading-[160%] font-medium font-h3 text-dodgerblue">
            Log in here
          </span>
        </div>
      </div>
    </form>
  );
};

export default Form;
