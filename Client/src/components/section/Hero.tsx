import { Typewriter } from "react-simple-typewriter";
import Input from "../ui/Input";
import Button from "../ui/Button";
import HorizontalScroll from "../ui/inifiteScroll";
import { AnimatedTooltip } from "../ui/userDeck";
import CongratsModal from "../ui/CongratsModal";
import { useState /*useContext*/ } from "react";
//import { FocusInputContext } from "../../pages/Home";
import axios from "axios";
function Hero({
  inputRef,
  emailCount,
}: {
  inputRef?: React.RefObject<HTMLInputElement | null>;
  emailCount: number | null;
}) {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);
  const people = [
    {
      id: 1,
      name: "Kirah Farid",
      designation: "",
      image:
        "https://media.istockphoto.com/id/2203422382/photo/happy-young-black-woman-smiling-against-green-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=MJKd6wjwRjHfD3uqUN3tFAl6LS3NPHVgBwU41rZ6ICw=",
    },
    {
      id: 2,
      name: "Ayo Adebayo",
      designation: "",
      image:
        "https://images.unsplash.com/photo-1518882570151-157128e78fa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Dia Laife",
      designation: "",
      image:
        "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Daniel Ayobami",
      designation: "",
      image:
        "https://images.unsplash.com/photo-1723221907042-44f8265747b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFmcmljYW4lMjBtZW58ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      name: "Kabiru Durden",
      designation: "",
      image:
        "https://images.unsplash.com/photo-1625647027179-bd3ba2aea4e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFmcmljYW4lMjBtZW58ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 6,
      name: "Joshua David",
      designation: "",
      image:
        "https://images.unsplash.com/photo-1735129497149-1bc83b9be1c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFmcmljYW4lMjBtZW58ZW58MHx8MHx8fDA%3D",
    },
  ];

  const handleSubmit = async () => {
    setDisabled(true);

    if (!email) {
      alert("Please enter your email");
      setDisabled(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      setDisabled(false); // <-- re-enable before returning
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setShowModal(true);
        setEmail("");
      } else {
        alert("Invalid email failed to join the waitlist. Please try again.");
      }
    } catch (error) {
      console.error("Error joining waitlist:", error);
      alert(
        "An error occurred Or You email has already been registered. Please try again later."
      );
    }
    setDisabled(false);
  };
  return (
    <section className="w-full h-[850px] bg-[#09090F] flex justify-center items-center relative px-2 sm:px-4 md:px-8">
      <div className="flex flex-col items-center justify-center w-full gap-3 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
        <div className="flex flex-col items-center justify-center gap-5 mb-6 text-center">
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
          <p className="text-[12px] sm:text-[15px] md:text-[14px] font-[400] text-white w-full max-w-xl md:max-w-2xl urbanist px-2">
            Fixing the trust problem in online commerce with blockchain-powered
            escrow, AI-dispute resolution, and transparent transactions. Pasar
            is where secure buying, verified delivery, and real accountability
            meet.
          </p>
        </div>
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center w-full gap-5">
              <p className="font-semibold text-[13px] sm:text-[14px] text-[#3B82F6] rethink-sans">
                Get notified on the Release
              </p>
              <div className="relative flex flex-col items-center justify-center w-full gap-3 md:flex-row">
                <div className="w-full h-[70px] z-[1] rounded-2xl  absolute   md:border-b md:border-l-[2px] md:border-r-[2px] -top-[50px] border-[#4e46e575]"></div>
                <Input
                  ref={inputRef}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="w-full md:w-[347px] h-[44px] text-white rounded-[6px] px-[16px] py-[4px] border border-purple-950 bg-[#131320] z-[2] urbanist"
                />
                <Button
                  className={`text-white text-[15px] sm:text-[16px] font-[600] w-full md:w-[141px] h-[44px] py-[14px] px-[20px] bg-[#4F46E5] rounded-[8px] flex justify-center items-center z-[2] urbanist ${
                    disabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={disabled}
                  onClick={handleSubmit}
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full mt-5 mb-5">
              <AnimatedTooltip items={people} />
              <p className="ml-5 text-[0.8rem] md:text-[1rem] font-bold text-white urbanist">
                {emailCount} people joined
              </p>
            </div>
            <div className="flex items-center justify-center w-full max-w-xs gap-4 -mt-2 scale-100 sm:flex-row">
              <a
                href="https://x.com/pasarHQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pasar Twitter"
                className="flex items-center gap-2"
              >
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
              </a>
              <a
                href="https://www.linkedin.com/company/pasarhq/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pasar Twitter"
                className="flex items-center gap-2"
              >
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
              </a>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <HorizontalScroll />
        </div>
      </div>
      <CongratsModal open={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
export default Hero;
