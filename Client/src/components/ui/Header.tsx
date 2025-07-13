import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { NavLink, useLocation } from "react-router-dom";
import { FocusInputContext } from "../../pages/Home";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const focusInput = React.useContext(FocusInputContext);
  const drawerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/features", label: "Features" },
    { to: "/team", label: "Team" },
    { to: "#join", label: "Join Us" },
  ];

  // Close drawer on Esc key
  useEffect(() => {
    if (!drawerOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [drawerOpen]);

  // Trap focus inside drawer when open
  useEffect(() => {
    if (!drawerOpen || !drawerRef.current) return;
    drawerRef.current.focus();
  }, [drawerOpen]);

  return (
    <header className="flex items-center justify-between w-full h-[72px] sm:h-[96px] px-4 sm:px-[40px] md:px-[80px] z-[3] fixed top-0">
      <div>
        <img src="/icons/Pasar.svg" alt="pasar logo" />
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex w-[400px] justify-between items-center text-white bg-[#141416E5] rounded-[36px] py-[12px] px-[24px] font-[400] text-[14px] urbanist">
        {navLinks.map((link, idx) =>
          link.to === "#join" ? (
            <a
              key={link.label}
              href="/"
              className={`transition-all duration-300 px-2 py-1 rounded-lg ${
                location.hash === "#join"
                  ? "text-[#4F46E5] font-bold underline underline-offset-4"
                  : "text-white hover:text-[#4F46E5]"
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (focusInput) focusInput();
                window.location.hash = "#join";
              }}
            >
              {link.label}
            </a>
          ) : (
            <NavLink
              key={link.to + idx}
              to={link.to}
              className={({ isActive }) =>
                `transition-all duration-300 px-2 py-1 rounded-lg ${
                  isActive
                    ? "text-[#4F46E5] font-bold underline underline-offset-4"
                    : "text-white hover:text-[#4F46E5]"
                }`
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          )
        )}
      </nav>
      <div className="hidden md:block">
        <Button
          className="w-[141px] py-[10px] px-[20px] text-center text-white text rounded-[8px] font-[600] urbanist text-[16px] bg-[#4F46E5] hover:bg-[#4338CA] active:bg-[#4F46E5]"
          onClick={() => {
            navigate("/");
            if (focusInput) focusInput();
            window.location.hash = "#join";
          }}
        >
          Join Waitlist
        </Button>
      </div>
      {/* Hamburger for mobile/tablet */}
      <button
        className="z-20 flex flex-col items-center justify-center w-10 h-10 md:hidden"
        onClick={() => setDrawerOpen(true)}
        aria-label="Open menu"
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>
      {/* Drawer overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-40"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        ></div>
      )}
      {/* Drawer */}
      <div
        ref={drawerRef}
        tabIndex={drawerOpen ? 0 : -1}
        aria-hidden={!drawerOpen}
        className={`fixed top-0 left-0 h-full w-[80vw] max-w-[340px] bg-[#141416] z-40 shadow-lg transform transition-transform duration-300 ease-in-out
          ${drawerOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#23232a]">
          <img src="/icons/Pasar.svg" alt="pasar logo" className="h-8" />
          <button
            className="text-2xl font-bold text-white"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-8 py-8 text-white font-[400] text-[16px] urbanist">
          {navLinks.map((link, idx) =>
            link.to === "#join" ? (
              <a
                key={link.label}
                href="/"
                className={`transition-all duration-300 px-2 py-1 rounded-lg ${
                  location.hash === "#join"
                    ? "text-[#4F46E5] font-bold underline underline-offset-4"
                    : "text-white hover:text-[#4F46E5]"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setDrawerOpen(false);
                  if (focusInput) focusInput();
                  window.location.hash = "#join";
                }}
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.to + idx}
                to={link.to}
                className={({ isActive }) =>
                  `transition-all duration-300 px-2 py-1 rounded-lg ${
                    isActive
                      ? "text-[#4F46E5] font-bold underline underline-offset-4"
                      : "text-white hover:text-[#4F46E5]"
                  }`
                }
                end={link.to === "/"}
                onClick={() => setDrawerOpen(false)}
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>
        <div className="px-8">
          <Button
            className="w-full py-[12px] px-[20px] text-center text-white rounded-[8px] font-[600] urbanist text-[16px] bg-[#4F46E5] hover:bg-[#4338CA] active:bg-[#4F46E5] mt-4"
            onClick={() => {
              setDrawerOpen(false);
              if (focusInput) focusInput();
              window.location.hash = "#join";
              navigate("/");
            }}
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
}
