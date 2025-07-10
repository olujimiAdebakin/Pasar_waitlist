import { Link } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-[96px] px-[80px] z-[3] absolute">
      <div>
        <Link to="/">
          <img src="/icons/Pasar.svg" alt="pasar logo" />
        </Link>
      </div>
      <nav className="w-[400px] flex justify-between items-center text-white bg-[#141416E5] rounded-[36px] py-[12px] px-[24px] font-[400] text-[14px] urbanist">
        <Link to="/" className="hover:text-[#4F46E5] transition-colors">
          Home
        </Link>
        <Link to="/about" className="hover:text-[#4F46E5] transition-colors">
          About Us
        </Link>
        <Link to="/features" className="hover:text-[#4F46E5] transition-colors">
          Features
        </Link>
        <Link to="/team" className="hover:text-[#4F46E5] transition-colors">
          Team
        </Link>
        <a href="#join" className="hover:text-[#4F46E5] transition-colors">
          Join Us
        </a>
      </nav>
      <div>
        <Button className="w-[141px] py-[10px] px-[20px] text-center text-white text rounded-[8px] font-[600] urbanist text-[16px] bg-[#4F46E5] hover:bg-[#4338CA] active:bg-[]]">
          Join Waitlist
        </Button>
      </div>
    </header>
  );
}
