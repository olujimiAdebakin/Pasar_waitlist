import Marquee from "react-fast-marquee";

const HorizontalScroll = () => {
  return (
    <div className="w-[100%] md:w-[70%] mx-auto overflow-hidden relative">
      <p className="absolute font-bold left-[50%] translate-x-[-50%] top-5 text-[white]  text-[16px] md:text[20px] urbanist">
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
            src="/icons/flutterwave.svg"
            alt="flutterwave"
            className="object-contain w-[154px] h-[154px]"
          />
          <img
            src="/icons/lisk-1.svg"
            alt="lisk"
            className="object-contain w-[104px] h-[104px]"
          />
          <img
            src="/icons/paystack-2.svg"
            alt="paystack"
            className="object-contain w-[154px] h-[154px]"
          />
          <img
            src="/icons/superteam.png"
            alt="superteam"
            className="object-contain w-[74px] h-[74px]"
          />
          <img
            src="/icons/verxio.jpeg"
            alt="verxio"
            className="object-contain w-[54px] h-[54px]"
          />
          <img
            src="/icons/circle.svg"
            alt="circle"
            className="object-contain w-[104px] h-[104px]"
          />
          <img
            src="/icons/base.jpeg"
            alt="base"
            className="object-contain w-[54px] h-[54px]"
          />
          <img
            src="/icons/stripe-4.svg"
            alt="stripe"
            className="object-contain w-[104px] h-[104px]"
          />
          <img
            src="/icons/solana.svg"
            alt="solana"
            className="object-contain w-[54px] h-[54px] mr-10"
          />
        </div>
      </Marquee>
    </div>
  );
};
export default HorizontalScroll;
