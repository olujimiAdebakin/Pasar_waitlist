import { Typewriter } from "react-simple-typewriter";

import Input from "../ui/Input";
import Button from "../ui/Button";
import HorizontalScroll from "../ui/inifiteScroll";

function Hero() {
  return (
    <section className="w-full h-screen bg-[#09090F] flex justify-center items-center  relative ">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center gap-[10px] text-center mb-[20px]">
          <div className="text-[42px] font-[700]  text-white flex  montserrat">
            <p className="text-[#4F46E5] ">Pasar:</p>
            <p>
              <Typewriter
                words={[
                  "Where Trust Meets Trade",
                  "Trade Freely. Trust Fully.",
                  "Powering Peer to Peer Commerce",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={5000}
              />
            </p>
          </div>
          <p className="text-[14px] font-[400] text-white w-[720px] urbanist">
            Experience agentic commerce smarter shopping where AI assists your
            decision and makes buying effortless. Just tell the system what you
            want and get instant suggestions Sell smarter using AI-powered smart
            wallets to automate payouts, manage assets, and sell smarter. Top
            rated sellers get featured and rewarded.
          </p>
        </div>
        <div className="w-[80%] h-[211px]  m-auto">
          <div className="flex flex-col items-center justify-center gap-[15px]">
            <div className="flex gap-[8px] flex-col items-center">
              <p className="font-semibold text-[12px] text-[#3B82F6]  rethink-sans">
                Get notified on the Release
              </p>
              <div className="flex gap-[12px] scale-75">
                <Input
                  placeholder="Enter Your Email"
                  className="w-[347px] h-[44px] text-white rounded-[6px] px-[16px] py-[4px] border border-purple-950 bg-[#131320] urbanist"
                />{" "}
                <Button className="text-white text-[16px] font-[600] w-[141px] h-[44px] py-[14px] px-[20px] bg-[#4F46E5] rounded-[8px] flex justify-center items-center urbanist ">
                  Join Waitlist
                </Button>
              </div>
            </div>

            <div className="w-[468px] h-[36px] text-white font-normal text-[18px] montserrat">
              Lorem ipsum dolor sit amet.
            </div>
            <div className="w-[350px] h-[48px] flex gap-[24px] items-center -mt-2 scale-90">
              <div className="flex gap-[10px]">
                <span className="flex w-[48px] h-[48px] justify-center items-center bg-[#17171C] border border-[#1C1C22]  rounded-[10px] p-[12px] cursor-pointer hover:scale-110 active:scale-125">
                  <img src="/icons/twitter.svg" alt="" />
                </span>
                <span className="flex flex-col">
                  <p className="font-[500] text-[14px] text-[#797C86] urbanist">
                    Twitter
                  </p>
                  <p className="font-[500] text-white text-[14px] rethink-sans">
                    @PasarHQ
                  </p>
                </span>
              </div>
              <div className="flex gap-[10px]">
                <span className="flex w-[48px] h-[48px] justify-center items-center bg-[#17171C] border border-[#1C1C22]  rounded-[10px] p-[12px] cursor-pointer hover:scale-110 active:scale-125">
                  <img src="/icons/Linkedin.svg" alt="" />
                </span>
                <span className="flex flex-col">
                  <p className="font-[500] text-[14px] text-[#797C86] urbanist">
                    LinkedIn
                  </p>
                  <p className="font-[500] text-white text-[14px] rethink-sans">
                    @PasarHQ
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <HorizontalScroll />
        </div>
      </div>
    </section>
  );
}
export default Hero;
