import { Typewriter } from "react-simple-typewriter";
import Input from "../ui/Input";
import Button from "../ui/Button";
import HorizontalScroll from "../ui/inifiteScroll";
import { AnimatedTooltip } from "../ui/userDeck";

function Hero() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#09090F] flex justify-center items-center relative px-2 sm:px-4 md:px-8">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center gap-4 mb-6 text-center">
          <div className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-[700] text-white flex flex-col md:flex-row  items-center justify-center montserrat">
            <p className="text-[#4F46E5] mr-2">Pasar:</p>
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
          <p className="text-[15px] sm:text-[16px] md:text-[18px] font-[400] text-white w-full max-w-xl md:max-w-2xl urbanist px-2">
            Experience agentic commerce smarter shopping where AI assists your
            decision and makes buying effortless. Just tell the system what you
          </p>
        </div>
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center w-full gap-2">
              <p className="font-semibold text-[13px] sm:text-[14px] text-[#3B82F6] rethink-sans">
                Get notified on the Release
              </p>
              <div className="relative flex flex-col items-center justify-center w-full gap-3 md:flex-row">
                <div className="w-full h-[70px] z-[1] rounded-2xl  absolute   md:border-b md:border-l-[2px] md:border-r-[2px] -top-[50px] border-[#4e46e575]"></div>
                <Input
                  placeholder="Enter Your Email"
                  className="w-full md:w-[347px] h-[44px] text-white rounded-[6px] px-[16px] py-[4px] border border-purple-950 bg-[#131320] z-[2] urbanist"
                />
                <Button className="text-white text-[15px] sm:text-[16px] font-[600] w-full md:w-[141px] h-[44px] py-[14px] px-[20px] bg-[#4F46E5] rounded-[8px] flex justify-center items-center z-[2] urbanist ">
                  Join Waitlist
                </Button>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full mb-5">
              <AnimatedTooltip items={people} />{" "}
              <p className="ml-5 text-[0.8rem] md:text-[1rem] font-bold text-white urbanist">
                5000+ people joined
              </p>
            </div>
            <div className="flex items-center justify-center w-full max-w-xs gap-4 -mt-2 scale-100 sm:flex-row">
              <div className="flex items-center gap-2">
                <span className="flex w-10 h-10 sm:w-12 sm:h-12 justify-center items-center bg-[#17171C] border border-[#1C1C22] rounded-[10px] p-2 cursor-pointer hover:scale-110 active:scale-125 transition-transform">
                  <img src="/icons/twitter.svg" alt="" />
                </span>
                <span className="flex flex-col">
                  <p className="font-[500] text-[13px] sm:text-[14px] text-[#797C86] urbanist">
                    Twitter
                  </p>
                  <p className="font-[500] text-white text-[13px] sm:text-[14px] rethink-sans">
                    @PasarHQ
                  </p>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex w-10 h-10 sm:w-12 sm:h-12 justify-center items-center bg-[#17171C] border border-[#1C1C22] rounded-[10px] p-2 cursor-pointer hover:scale-110 active:scale-125 transition-transform">
                  <img src="/icons/Linkedin.svg" alt="" />
                </span>
                <span className="flex flex-col">
                  <p className="font-[500] text-[13px] sm:text-[14px] text-[#797C86] urbanist">
                    LinkedIn
                  </p>
                  <p className="font-[500] text-white text-[13px] sm:text-[14px] rethink-sans">
                    @PasarHQ
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="tb:-bottom-15 tb:absolute md:absolute">
          <HorizontalScroll />
        </div>
      </div>
    </section>
  );
}
export default Hero;
