import Button from "../ui/Button";
import Input from "../ui/Input";
import CongratsModal from "../ui/CongratsModal";
import { useState } from "react";
import axios from "axios";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = async () => {
    if (!email) {
      alert("Please enter your email");
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
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <section className="w-full min-h-[400px] sm:min-h-[500px] md:h-[555px] pt-10 md:pt-[127px] pb-10 md:pb-[108px] px-4 sm:px-8 md:px-[48px] flex justify-center items-center bg-[#09090F]">
      <div className="bg-[#6E51E008] rounded-[24px] py-8 md:py-[48px] px-4 sm:px-8 md:px-[80px] border border-[#23262F] w-full mx-auto">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-full max-w-xl flex justify-center items-center flex-col mb-6 md:mb-[32px]">
            <p className="font-[700] text-[26px] sm:text-[32px] md:text-[40px] text-[#FCFCFD] text-center montserrat">
              Be First to Shop, Sell & Earn Without the Risk.
            </p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-center text-[#E6E8EC] font-[400] urbanist">
              Join thousands already on the waitlist for Africa’s most secure,
              crypto-ready marketplace — built to protect you.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-[12px] justify-center items-center">
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="w-full md:w-[313px] flex-shrink-0 h-[44px] text-white rounded-[6px] px-[16px] py-[4px] border border-purple-950 bg-[#131320]"
          />
          <Button
            onClick={handleSubmit}
            className="text-white text-[15px] text-nowrap md:text-[16px] font-[600] w-full md:w-[141px] h-[44px] py-[14px] px-[20px]  bg-[#4F46E5] rounded-[8px] flex justify-center items-center flex-shrink-0 urbanist "
          >
            Join Waitlist
          </Button>
          <p className="font-[700] text-white text-[15px] md:text-[18px] text-nowrap w-full md:w-[242px] text-center md:text-start montserrat">
            No spam. Just early access.
          </p>
        </div>
      </div>
      <CongratsModal open={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
