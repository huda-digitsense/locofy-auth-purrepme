import type { NextPage } from "next";

export type HeaderType = {
  className?: string;
  joinPurrepmeToday?: string;
};

const Header: NextPage<HeaderType> = ({
  className = "",
  joinPurrepmeToday,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-2 text-center text-6xl text-black font-h3 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <img
          className="h-[66px] w-[70px] relative object-cover"
          loading="lazy"
          alt=""
          src="/logo-1@2x.png"
        />
      </div>
      <h2 className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[160%] font-medium font-[inherit] mq450:text-xl mq450:leading-[32px]">
        {joinPurrepmeToday}
      </h2>
    </div>
  );
};

export default Header;
