import Button from "../ui/Button";
import Input from "../ui/Input";

export default function CTA() {
  return (
    <section className="w-full h-[565px] pt-[127px] pb-[108px] px-[108px] flex justify-center items-center bg-[#09090F]">
      <div className="bg-[#6E51E008] rounded-[24px] py-[48px] px-[80px] border border-[#23262F]">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-[598px] h-[158px] flex justify-center items-center flex-col mb-[32px]">
            <p className="font-[700] text-[40px] text-[#FCFCFD] text-center montserrat">
              Be First to Shop, Sell & Earn Without the Risk.
            </p>
            <p className="text-[20px] text-center text-[#E6E8EC] font-[400] urbanist">
              Join thousands already on the waitlist for Africa’s most secure,
              crypto-ready marketplace — built to protect you.
            </p>
          </div>
        </div>
        <div className="w-[720px] h-[44px] flex gap-[12px] justify-center items-center">
          <Input
            placeholder="Enter Your Email"
            className="w-[313px] h-[44px] text-white rounded-[6px] px-[16px] py-[4px] border border-purple-950 bg-[#131320]"
          />{" "}
          <Button className="text-white text-[16px] font-[600] w-[141px] h-[44px] py-[14px] px-[20px] bg-[#4F46E5] rounded-[8px] flex justify-center items-center urbanist ">
            Join Waitlist
          </Button>
          <p className="font-[700] text-white text-[18px] w-[242px] text-nowrap montserrat">
            No spam. Just early access.
          </p>
        </div>
      </div>
    </section>
  );
}
