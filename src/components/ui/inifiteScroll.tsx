import Marquee from "react-fast-marquee";

const HorizontalScroll = () => {
  return (
    <div className="w-[70%] mx-auto overflow-hidden relative">
      <p className="absolute font-bold left-[50%] translate-x-[-50%] top-5 text-[#4F46E5] text-[16px] urbanist">
        Partners and Sponsor
      </p>
      <Marquee
        gradient={true}
        gradientColor={[255, 255, 255]}
        gradientWidth={100}
        className="w-full "
      >
        <div className="flex items-center justify-between gap-[50px]">
          <img
            src="/icons/flutterwave-1.svg"
            alt="Partner 1"
            className="object-contain w-[154px] h-[154px]"
          />
          <img
            src="/icons/lisk-1.svg"
            alt="Partner 2"
            className="object-contain w-[154px] h-[154px]"
          />
          <img
            src="/icons/paystack-2.svg"
            alt="Partner 3"
            className="object-contain w-[154px] h-[154px]"
          />
          <img
            src="/icons/superteam.png"
            alt="Partner 4"
            className="object-contain w-[74px] h-[74px]"
          />
          <img
            src="/icons/solana.svg"
            alt="Partner 5"
            className="object-contain w-[54px] h-[54px]"
          />
        </div>
      </Marquee>
    </div>
  );
};
export default HorizontalScroll;
