import Button from "./Button";

export default function Footer() {
  return (
    <footer className="w-full h-[500px] bg-[#09090F] p-[80px] box-border text-white">
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center mb-[57px] gap-[20px] w-[659px]">
            <p className="font-[700] text-[40px] montserrat  ">
              Fast. Focused. Flexible.
            </p>
            <p className="font-[400] urbanist text-[16px] text-center">
              Pasar is built for speed, clarity, and adaptability, helping you
              sell smarter and buy faster, whether you're in a bustling market
              or scaling your online storefront across Africa.
            </p>
          </div>
        </div>
        <div className="h-[205px] flex flex-col justify-between ">
          <div className="flex justify-center w-full">
            <Button className="font-[500] text-[14px] w-[121px] h-[40px] text-nowrap text-white flex justify-center items-center bg-[#4F46E5] py-[10px] px-[16px] rounded-full cursor-pointer hover:bg-[hsl(244,37%,56%)] active:bg-[#4F46E5] urbanist">
              👋 Contact Us
            </Button>
          </div>
          <div className="flex items-center justify-between h-[88px] border-t border-[#4e46e53e] ">
            <img src="/icons/Pasar.svg" alt="logo" />
            <p className="font-[500] text-[16px] urbanist">
              © 2025 Pasar Inc. All Rights Reserved.{" "}
            </p>
            <div className="flex gap-[8px]">
              <Button className="w-[40px] h-[40px] rounded-full p-[12px] flex justify-center items-center bg-[#17171C] cursor-pointer hover:scale-110 active:scale-125">
                <img src="/icons/twitter.svg" alt="X" />
              </Button>
              <Button className="w-[40px] h-[40px] rounded-full p-[12px] flex justify-center items-center bg-[#17171C] cursor-pointer hover:scale-110 active:scale-125">
                <img src="/icons/Linkedin.svg" alt="linkedin" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
