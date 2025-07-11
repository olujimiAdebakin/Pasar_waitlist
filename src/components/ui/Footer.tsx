import Button from "./Button";

export default function Footer() {
  return (
    <footer className="w-full min-h-[350px] md:h-[500px] bg-[#09090F] px-4 sm:px-8 md:px-[80px] py-10 md:py-[80px] box-border text-white">
      <div className="flex flex-col gap-8 md:gap-0">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center mb-8 md:mb-[57px] gap-4 md:gap-[20px] w-full max-w-2xl">
            <p className="font-[700] text-[26px] sm:text-[32px] md:text-[40px] montserrat text-center">
              Fast. Focused. Flexible.
            </p>
            <p className="font-[400] urbanist text-[15px] sm:text-[16px] text-center">
              Pasar is built for speed, clarity, and adaptability, helping you
              sell smarter and buy faster, whether you're in a bustling market
              or scaling your online storefront across Africa.
            </p>
          </div>
        </div>
        <div className="min-h-[120px] md:h-[205px] flex flex-col justify-between gap-6 md:gap-0">
          <div className="flex justify-center w-full mb-4 md:mb-0">
            <Button className="font-[500] text-[14px] w-full max-w-[180px] h-[40px] text-nowrap text-white flex justify-center items-center bg-[#4F46E5] py-[10px] px-[16px] rounded-full cursor-pointer hover:bg-[hsl(244,37%,56%)] active:bg-[#4F46E5] urbanist">
              👋 Contact Us
            </Button>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[88px] border-t border-[#4e46e53e] gap-4 md:gap-0 pt-4 md:pt-0">
            <img src="/icons/Pasar.svg" alt="logo" className="h-8 md:h-auto" />
            <p className="font-[500] text-[14px] sm:text-[15px] md:text-[16px] urbanist text-center">
              © 2025 Pasar Inc. All Rights Reserved.
            </p>
            <div className="flex gap-2 md:gap-[8px]">
              <Button className="w-10 h-10 md:w-[40px] md:h-[40px] rounded-full p-2 md:p-[12px] flex justify-center items-center bg-[#17171C] cursor-pointer hover:scale-110 active:scale-125">
                <img src="/icons/twitter.svg" alt="X" />
              </Button>
              <Button className="w-10 h-10 md:w-[40px] md:h-[40px] rounded-full p-2 md:p-[12px] flex justify-center items-center bg-[#17171C] cursor-pointer hover:scale-110 active:scale-125">
                <img src="/icons/Linkedin.svg" alt="linkedin" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
